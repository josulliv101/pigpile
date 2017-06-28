import React from 'react';
import { connect } from 'react-redux';

import { fetchCancel } from '../reducers/api';

export default function withAsyncWork(asyncWork, mapStateToProps, mapDispatchToProps, mergeProps, options) {
  
  return (WrappedComponent) => {

    const {action, key: keyAsyncWork, keyReducer: keyReducerProps} = asyncWork;
    
    const finalMapStateToProps = (state, ownProps) => {
      const keyReducer = typeof keyReducerProps === 'function' ? keyReducerProps(state, ownProps) : (keyReducerProps || keyAsyncWork);
      return {
        ...mapStateToProps(state, ownProps),
        keyAsyncWork,
        keyReducer,
        // Keys can be functions in case you want to include a match param from url in key
        [keyAsyncWork]: state.api[keyReducer],
        loading: state.api.loadState[keyReducer] && state.api.loadState[keyReducer].loading,
        cached: state.api.loadState[keyReducer] && state.api.loadState[keyReducer].loaded,
      };
    };

    const customMapDispatchToProps = Object.assign({}, mapDispatchToProps, {fetchCancel, action});

    class AsyncWorkComponent extends React.Component {

      componentWillMount() {
        const { id, cached, keyReducer, loading } = this.props;
        if (!cached && !loading) this.props.action(id, keyReducer);
      }

      componentWillUnmount() {
        const { keyReducer, loading, fetchCancel } = this.props;
        if (loading) fetchCancel(keyReducer);
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    };

    return connect(finalMapStateToProps, customMapDispatchToProps, mergeProps, options)(AsyncWorkComponent);
  };
}