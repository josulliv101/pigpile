import * as React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "../../../../testUtils";
import { axe } from "jest-axe";
import { Chester } from "./Chester";

describe("Chester", () => {
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Chester />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("handles click events", () => {
    const clickHandler = jest.fn();
    render(<Chester onClick={clickHandler} />);
    userEvent.click(screen.getByRole("img"));
    expect(clickHandler).toHaveBeenCalled();
  });
  it("renders correctly", () => {
    const { container } = render(<Chester />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        aria-label="Chester the pig"
        class="chakra-fade chakra-stack css-jp20jv"
        role="img"
        style="opacity: 0;"
      >
        <div
          class="css-fs4ucc"
        >
          <img
            class="chakra-image css-1qf3czs"
            role="presentation"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABQCAYAAACgVNM/AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAADgFJREFUeJzlXAl0VdUVFbSIs7W1VevS1mFV7Wi17Wqrq62tq7paWydIsDK7KKBhHgUMIRpCQBRxBhStIvM8yExCEkISApgEQpKbkCBJCGNIQuac7v3fffHz8/7PT/5N+Ky+tXbez3/vv3fuvuece+65571L1K6kbEDcUA98DawGRgDfu+T/aUODqzwIsZEHLAaeAn5woeXssA2NTQWqgUYvxOQCE4E7gEsvtLyeG2TqBHSmbBqdAr3geGArUO6FkDqgFPgQuNdQO4xtkOkqajBwJ/Aj4LpAL3gfMBo46IUQG6eAz4FH2CM+rmf32GVAFy3wdcA1vn7XBrlJwEBgHrAUWAnMAh4K9MIU/A/AcrvxOfEJkrllq+Qm7nIiZg3wdzpb4Abg+8D9wD+1v+kG9AB6Ay8AYcBY7aBDgN8AtwJd2yjvt4GHgZlAvodsseywQAn5lla5KNuPZO2IlR1z5squzxe4yHEgJQ4YDvQHRgELgXQgU1mjFgUtAk4AFUCD9lMK2AxMAf6kNccvu9da9x1NNBte62DaE0hYoIR00lrCxlXy4tSMhM8+l23vvS87538iB7Zu8yTkHHAUKNANL9MCUqh6TYCTk67X9ygGEoH3gcdpWn7I+Utgqia9ijK6OsvSYl63UGunGbPUFzttC5+8aLFs/+BD2f7hHJe2pC5fYd/cJM5qbXsZ+JmDTNcDfwNeUZafIPlyAOacCO1lZ6WtXCWa5HXAg0bI0Dd/Vqt4ozshJIOkbHv/AznYXFNM4QwwF3hAWY6Y+AkwDNhpy0SN2LNipSUTOwugr8Ox49oMbzVJyBPAMa3ukrTgi/M0ZO+atd6crCnUAJ8oy+n+FlikiZLchETJ2LjJpRFNnYQ9zVr/9gjQSwU65HoQ8pi2w3oKkPDpf11aETvvI5eKtiMR7qCGxmqcpYnuX79B4j/51NUxdufYhGhzIRhVPwlcaZIQxheHgDqbkB0Q4GDHkdEMKYuXyDY3LXUHv8vYtNk+l86dQ/o1Jgl5CNin9HDGIXfvqtU+BaYJkbz2IINDvxMRTcAxN83lqDUAuMEkIb8DdisrXpBMsO8lBhHbrnk8NxH7nfHG/UvWtu2y3RsZGgdxjj6/RFkB4I0mCaEji7MJ8QUSUZC6R2oqKqSmslKO5SrJAUH+kEIiXVrlx7lp0FDbibZACAcDRsM3mSTkNmUFPmW+hMyGNnydni5lJ05IekaG5OXnS2NDgxw9cNB1zOtvGUiBiCP7v5Kj+F1+ckqLBPL8uI/nO5sOvsvcvMU+l8PuZGV42L1Ua0miah4WNzWK+5PHjklxSYmMGztOBgwYIGlpaVJ9+oxFiJdGZsftlOMFBVJTXSWV0KraqiqLRHzfJi0hIRiK9XkngWnAD40Rokm5FhiprByIo3YUZWRKSVGRLFy4UGJiYiQ0NFSWLl8u9eXl8CUJjr1+CL8r3LdfaqurJTY2VqKiomTjli1yprS0yTl7I+RQbJzEzp3nSMjB7Tvs8zgT50z3TqOEaFKYU/jUUYVJCMylpKhYhg0fIc926ya9+vSRnXCsFaXHnTUE/x+Ki5fKE6ckOSVF1qxaJUOHDJF+/fvL/pQ9Upqe6TINX1qSiADsvBgEnxmkuTl9TjneMk6IsiZ6XTTbjiZTCGe6F2o+IzpaxowZIxHh4bIJUWx+2l6vDljt2i1S3yAbNm6UyClTJCwsTEaOHCkqK0uKoDm+RjNi3+o1riDRPShL+mKh+zn0IWOAm00TwlQAcxvrfQmYBTU+AFLSuYdWHEDMwF7OS9rtOKrQgZ6Gz1m6dJk8/cwz0j0kRCZMmiRZ+/ZJ/u7kFkecLJiGu6lsP9+hEoeBp4GrTBNypbLyG8qXgPloeGFKqhwBuD+MBrd0fjb28WvXyVr07JovFsiWZctkLwKrPB+/ayIVhNFEqCUkI615wJihrFnx5aYJuV1rR01LQjqZU1OM4aVRJMYmsaAFEpuZDcyS04nMb8J1G1w14ESQSfDO2uQDSzRrMmguj2n1a5WwLqcI9T+CAK0wO0dy2VgvZpCn0dp7uKYJ8QmciTd4HNsP/FvpJBP2lwVMhr4Q04hMxJxsjaDZCQmSh6G4oqJSuDUCJ4+VSi6Pm5/nMBFkR9KMlZgeYPzxXWUNCIFrhhshvwa2Ke8LV801I55kZMg5BFkNiFbr6+stRrAVZmezR00T4k7GXmAccJcpIpT7upOysuYcvrwtWDXzGdmII8rLK1wE1NXVSV1NndTX1bv+p8YcwgjSDrNhJoO49MCEltlh1o2MK5SVRfebjBzsT584KdXVNXIUIXl52VmXhpxDWF52tlzqGhrl67x8V5RqgIRGbS75ykpM/75diHAjhNHpbH8FdMUW6RlSXVsrRdm5iEPipLig0KUZJ44jYt2zR0oKj0hNTa0UHMxqMfDyAzQRZsXeAR5VgS41+EEIE7of+U0Ier1Y5UkFtCF7N2OMXVJaUuxyH8cQgGXheA5Gmkr4lsqKCsnFMBugP6F2MDXBNOHVyuAKoDdCblKWt/bPZKAhBRnUkBr4igopO1MmtbXwIQBnskWHC+QozKUKhNRBiw4zPA/MdOhM05S1Ds1I+tr2JoQBTU9lLWq3TAp9CHA0Lw9mUePSjEb8aYDf4Od6/KnDqNOAL0+fOim5gTtXxh6cwH2lfQjXkO5RbVwO9ZeUB5W1zHjOLyF1wicXvV+Uny/Hi0ukDE627NRpOYP9afiSosOHJTc11fRIw07bCIQDfwVuVKaCMQ9CuG4apm/ot4A58fGukSSbkSRC89wkfI89RyF+3w7DLrWF68VMLHMdmYvvXNC6xTQhjPQ42sxSbkuafkPPY9yhEo0S4QtMaLEcog9whWli7gXmK71qdpGBRT9vK9N1ccpaklikvK/iBzuoMQ+bJKQr8CtlTfY2KG9J5+AFO5E+hkU15oZoZVUHsVrnNSBFtWLi1wrBbbQHMaxXSQZ+YYwUTQyjw1BgibLyJSTGMy/RVkKcchymSeEg0d0kIRyBmF5k/UYEsEudPxIFs5+xJ4b8/IYxUjQxdj0atWWLBxH8zNRjbTv3eCDEcP+oUVI0MSTlLa2O7je068yCWWMW6o41ml1jWSVLmEw72Y7AHmW6ABkXvEVZQ3JFEDSwtWAnbjZNCCsF6FxbNe8JMtxlkhDOMFmPcTYIGtZWjDNJCJ0Sy7aDcTTxF7EmiOhk75VVz34x+hDRHclKbKNFen9RVhnnhW5cW8BScK5f322SEGbYMoOgcW0lhDNic3McXOznyiq7bv3C+IUHCeGyxhNtbXyzdVNlLSHyKatWrQUHCWxCnjSiHZoQpgZYtXMkCBrYVkKeMkkIlz/5EFB6EDSwLYTQh/wrUBI8zYYpARbYXGzxCAlhGftjARGiSejs9vlyZWXTSoKgka0BZ+VMjQa+aO6uJcpa8eurLj6z4dIoB4T7AibEgSA+VrIpCBrZGnDGy8mpuVJwN0JY7DY3CBrZGjCl+KIyXVahvin0naBv5JQpa8+selvBRTg+DWr20X31zWSP5U3uYbw7CcFIyAHl8BSoSWJYsMc3SZS5ERCsQzHNhY+83taehDykb5Kjgn+VjzN0pj/NPX3lQAiXPT9TVgYt2MzDEyz0ZYGy2SoBD0K4LBGpLoyZcCWRBTSMhfxJWLGehLUw7VenpqyRhg8S+6o+YpogSVkFt/7Wn3AmfUTvvWkefdefgTeV9aogX9cjYZHtRoQHKRxpjvsQhs/tP6Kxwg8ySCALdMMSV6/J3bp4iThh15q1XGfhu0lY1ZzfwjX5gPQ/OooQrvtm+RCGtst3jrAu/b0WBKfpHdA9f8PudevnbFuy1JGQpLXrNur7j/aDkBjg+o4i5MfaHLz1Nkue+LaZK7V6+xKcz9CxEuhqXhuEzHciY8ey5XXJ6zewkZ1aIKRRHwtsut9KQlgmmebF1mnbEZoMkjK9BULoIB/f8+XGLqkbvvwjTCbHiRB8fwjHqUXMzTBaLvByPUamnJXf3pGEUEOSlfNIw+/5mh6+uIWPw05qgRC+C8Q1z4AGhMetWHnOiRBozjyQxmty1HhdWQ80eyOYJt2+FdAehNyhG+6kITQX+g871B/qgwyul0ywrwsfsdnTf/D/+FWrS1I2fPm0vt7tyir9dkp4c5Qaotq7+tmBEL73w+lZPU61p3qcO8gHIStnT5vmsvU3oqKGDRk8+Gy3bt3EHf379q17/dVX+c6krhrdlXOym3mPj907o0O2d2fMuHlqePii53o8J57CDx7wn6rpkZEz3chgUmm0FzLqbe34YObMLlMmTIjr16dPfWhISNP1nuvRQ8YMH36U9+R5s6Kj+/L/ELdzbIQNGlQO4iI6jAh7g1C9KVSog1AvjxqdPXtaTFPu8r0Zr989efz4JM/zunfvLn169WqYPiVytibkshmRkTH8/aABA6p6hIa6zhv+0kun2EgSBnSNnDhxs33ME69OnLQJ53SsqXCj+r7Qr1+dp0DszWkREXPdhXozamrYyCFDSz3PDQEhY4YNL541NbqnJqTzu9Nn3EPzeeO1qFG8zrTJEfPfnDp1sK0d/OxkUsSLAwdW8l4dTga3t6KjQ8LHjU9hQ0lM7569Gl6CQNCE5Ldjpje9eY6NhBnsCPXSo+jtLWjsT/29L8nDPXYPg9aQAJpX3969G4YOfrGMBEIbzb8LwJ+N6o3evA89MhDEpI4bMaIg6pVXlrwzffoDHud1mTR2bDq1oefzzzf20ugBTWJjYiKmzME5rSrLxj3un/naa2OjwycvmDB6dNb4kaNy+Zmm2Za2/A/lrYqe/FV8MQAAAABJRU5ErkJggg=="
          />
          <svg
            class="css-17tky8s"
            viewBox="0 0 24 24"
          >
            <path
              d="m 11.400013,-0.5999999 a 12.000056,11.999994 0 0 0 -0.360358,0.0134359 12.000958,11.998052 65.744772 0 1 1.367364,0.0296278 12.000056,11.999994 0 0 0 -1.007006,-0.0430637 z m 1.007006,0.0430637 a 12.000056,11.999994 0 0 1 0.02481,0.002411 12.000958,11.998052 65.744772 0 0 -0.02481,-0.002411 z m 0.02481,0.002411 A 12.000958,11.998052 65.744772 0 1 13.9146,-0.332661 12.000056,11.999994 0 0 0 12.431825,-0.55452503 Z m 1.482775,0.22186404 a 12.000056,11.999994 0 0 1 0.01723,0.003789 12.000958,11.998052 65.744772 0 0 -0.01723,-0.003789 z m 0.01723,0.003789 a 12.000958,11.998052 65.744772 0 1 1.45176,0.40996671 12.000056,11.999994 0 0 0 -1.451769,-0.40996612 z m -2.89218,-0.25769242 a 12.000958,11.998052 65.744772 0 0 -0.264585,0.009991 12.000056,11.999994 0 0 1 0.264585,-0.009991 z m -0.264585,0.009991 a 12.000056,11.999994 0 0 0 -1.310518,0.13849338 12.000958,11.998052 65.744772 0 1 1.310521,-0.13849277 z m -1.3105208,0.13849276 a 12.000958,11.998052 65.744772 0 0 -0.2187643,0.0413411 12.000056,11.999994 0 0 1 0.2187643,-0.0413411 z m -0.2187643,0.0413411 a 12.000056,11.999994 0 0 0 -1.2984626,0.30695784 12.000958,11.998052 65.744772 0 1 1.2984626,-0.30695784 z m -1.2984626,0.30695784 a 12.000958,11.998052 65.744772 0 0 -0.053744,0.01446936 12.000056,11.999994 0 0 1 0.053744,-0.01446936 z m -0.053744,0.01446936 a 12.000056,11.999994 0 0 0 -1.2753772,0.47817924 12.000958,11.998052 65.744772 0 1 1.27538,-0.47817905 z M 6.6181981,0.40286689 A 12.000958,11.998052 65.744772 0 0 6.3915098,0.501741 12.000056,11.999994 0 0 1 6.6181981,0.40286689 Z M 6.3915098,0.501741 A 12.000056,11.999994 0 0 0 5.2218943,1.1194463 12.000958,11.998052 65.744772 0 1 6.3915098,0.501741 Z M 5.2218943,1.1194463 A 12.000958,11.998052 65.744772 0 0 5.0234558,1.2441589 12.000056,11.999994 0 0 1 5.2218943,1.1194463 Z M 5.0234558,1.2441589 a 12.000056,11.999994 0 0 0 -1.124829,0.790649 12.000958,11.998052 65.744772 0 1 1.124829,-0.790649 z m -1.124829,0.790649 a 12.000958,11.998052 65.744772 0 0 -0.023427,0.020325 12.000056,11.999994 0 0 1 0.023427,-0.020325 z m -0.023427,0.020325 A 12.000056,11.999994 0 0 0 2.8595816,2.9815194 12.000958,11.998052 65.744772 0 1 3.8751998,2.0551329 Z M 2.8595816,2.9815194 a 12.000958,11.998052 65.744772 0 0 -0.090262,0.082338 12.000958,11.998052 65.744772 0 0 -0.067524,0.075447 12.000056,11.999994 0 0 1 0.157786,-0.157785 z M 2.7017952,3.1393049 A 12.000056,11.999994 0 0 0 2.3448814,3.5379022 12.000958,11.998052 65.744772 0 1 2.7017952,3.1393049 Z M 2.3448814,3.5379022 a 12.000958,11.998052 65.744772 0 0 -0.24667,0.2869765 12.000056,11.999994 0 0 1 0.24667,-0.2869765 z m -0.24667,0.2869765 A 12.000056,11.999994 0 0 0 1.7750601,4.2469026 12.000958,11.998052 65.744772 0 1 2.0982114,3.8248787 Z M 1.7750601,4.2469026 A 12.000958,11.998052 65.744772 0 0 1.5521613,4.5490371 12.000056,11.999994 0 0 1 1.7750601,4.2469026 Z M 1.5521613,4.5490371 A 12.000056,11.999994 0 0 0 1.2638054,4.9920762 12.000958,11.998052 65.744772 0 1 1.5521613,4.5490371 Z M 1.2638054,4.9920762 A 12.000958,11.998052 65.744772 0 0 1.0584768,5.3193604 12.000056,11.999994 0 0 1 1.2638054,4.9920762 Z M 1.0584768,5.3193604 A 12.000056,11.999994 0 0 0 0.80595004,5.7816918 12.000958,11.998052 65.744772 0 1 1.0584768,5.3193604 Z M 0.80595004,5.7816918 A 12.000958,11.998052 65.744772 0 0 0.62990485,6.1144874 12.000056,11.999994 0 0 1 0.80595004,5.7816918 Z M 0.62990485,6.1144874 A 12.000056,11.999994 0 0 0 0.4083842,6.6061026 12.000958,11.998052 65.744772 0 1 0.62990485,6.1144874 Z M 0.4083842,6.6061026 A 12.000958,11.998052 65.744772 0 0 0.25886636,6.9492338 12.000056,11.999994 0 0 1 0.4083842,6.6061026 Z M 0.25886636,6.9492338 A 12.000056,11.999994 0 0 0 0.07593091,7.4542848 12.000958,11.998052 65.744772 0 1 0.25886636,6.9492338 Z M 0.07593091,7.4542848 A 12.000958,11.998052 65.744772 0 0 -0.04602603,7.802584 12.000056,11.999994 0 0 1 0.07593091,7.4542848 Z M -0.04602603,7.802584 A 12.000056,11.999994 0 0 0 -0.19657741,8.3458751 12.000958,11.998052 65.744772 0 1 -0.04602603,7.802584 Z m -0.15055138,0.5432911 a 12.000958,11.998052 65.744772 0 0 -0.0892284,0.3331404 12.000056,11.999994 0 0 1 0.0892284,-0.3331404 z m -0.0892284,0.3331404 a 12.000056,11.999994 0 0 0 -0.10679847,0.5443253 12.000958,11.998052 65.744772 0 1 0.10679847,-0.5443253 z m -0.10679847,0.5443253 a 12.000958,11.998052 65.744772 0 0 -0.0664907,0.3524325 12.000056,11.999994 0 0 1 0.0664907,-0.3524325 z m -0.0664907,0.3524325 a 12.000056,11.999994 0 0 0 -0.0654571,0.5536277 12.000958,11.998052 65.744772 0 1 0.0654571,-0.5536277 z m -0.0654571,0.5536277 a 12.000958,11.998052 65.744772 0 0 -0.0392743,0.348298 12.000056,11.999994 0 0 1 0.0392743,-0.348298 z m -0.0392743,0.348298 a 12.000056,11.999994 0 0 0 -0.0237713,0.5898 12.000958,11.998052 65.744772 0 1 0.0237713,-0.5898 z m -0.0237713,0.5898 a 12.000958,11.998052 65.744772 0 0 -0.0120579,0.319361 12.000056,11.999994 0 0 1 0.0120579,-0.319361 z m -0.0120579,0.319361 A 12.000056,11.999994 0 0 0 -0.6,11.399951 a 12.000056,11.999994 0 0 0 0.028939,0.77928 12.000958,11.998052 65.744772 0 1 -0.0285946,-0.792371 z M 15.389107,0.08316217 A 12.000958,11.998052 65.744772 0 1 22.695158,7.3502429 12.000056,11.999994 0 0 0 15.389107,0.08316217 Z m 7.306051,7.26708073 a 12.000958,11.998052 65.744772 0 1 0.419957,1.45383 12.000056,11.999994 0 0 0 -0.419957,-1.45383 z m 0.419957,1.45383 a 12.000056,11.999994 0 0 1 0.0032,0.01516 12.000958,11.998052 65.744772 0 0 -0.0032,-0.01516 z m 0.0032,0.01516 a 12.000958,11.998052 65.744772 0 1 0.230378,1.4831121 12.000056,11.999994 0 0 0 -0.230478,-1.4831119 z m 0.230434,1.4831121 a 12.000056,11.999994 0 0 1 0.0023,0.02549 12.000958,11.998052 65.744772 0 0 -0.0023,-0.02549 z m 0.0023,0.02549 a 12.000958,11.998052 65.744772 0 1 0.03756,1.37356 A 12.000056,11.999994 0 0 0 23.4,11.399952 12.000056,11.999994 0 0 0 23.351072,10.32784 Z m 0.03756,1.37356 a 12.000056,11.999994 0 0 1 -0.01,0.271473 12.000958,11.998052 65.744772 0 0 0.01,-0.271473 z m -0.01,0.271473 a 12.000958,11.998052 65.744772 0 1 -0.131259,1.314648 12.000056,11.999994 0 0 0 0.131259,-1.314648 z m -0.131259,1.314648 a 12.000056,11.999994 0 0 1 -0.03686,0.193614 12.000958,11.998052 65.744772 0 0 0.03686,-0.193614 z m -0.03686,0.193614 a 12.000958,11.998052 65.744772 0 1 -0.282155,1.226798 12.000056,11.999994 0 0 0 0.282155,-1.226798 z m -0.282155,1.226798 a 12.000056,11.999994 0 0 1 -0.04513,0.169154 12.000958,11.998052 65.744772 0 0 0.04513,-0.169154 z m -0.04513,0.169154 a 12.000958,11.998052 65.744772 0 1 -0.453377,1.22921 12.000056,11.999994 0 0 0 0.453377,-1.22921 z m -0.453377,1.22921 a 12.000056,11.999994 0 0 1 -0.118856,0.272851 12.000958,11.998052 65.744772 0 0 0.118856,-0.272851 z m -0.118856,0.272851 a 12.000958,11.998052 65.744772 0 1 -0.593248,1.139636 12.000056,11.999994 0 0 0 0.593248,-1.139636 z m -0.593248,1.139636 a 12.000056,11.999994 0 0 1 -0.146072,0.232544 12.000958,11.998052 65.744772 0 0 0.146072,-0.232544 z m -0.146072,0.232544 a 12.000958,11.998052 65.744772 0 1 -0.709006,1.021472 12.000056,11.999994 0 0 0 0.709006,-1.021472 z m -0.709006,1.021472 a 12.000056,11.999994 0 0 1 -0.07821,0.105764 12.000958,11.998052 65.744772 0 0 0.07821,-0.105764 z m -0.07821,0.105764 a 12.000958,11.998052 65.744772 0 1 -0.875059,0.970826 12.000056,11.999994 0 0 0 0.875059,-0.970826 z m -0.875059,0.970826 a 12.000056,11.999994 0 0 1 -0.21911,0.219109 12.000958,11.998052 65.744772 0 0 0.21911,-0.219109 z m -0.21911,0.219109 a 12.000958,11.998052 65.744772 0 1 -0.957742,0.824067 12.000056,11.999994 0 0 0 0.957742,-0.824067 z m -0.957742,0.824067 a 12.000056,11.999994 0 0 1 -0.253904,0.187068 12.000958,11.998052 65.744772 0 0 0.253904,-0.187068 z m -0.253904,0.187068 a 12.000958,11.998052 65.744772 0 1 -1.085554,0.716578 12.000056,11.999994 0 0 0 1.085554,-0.716578 z m -1.085554,0.716578 a 12.000056,11.999994 0 0 1 -0.131603,0.06959 12.000958,11.998052 65.744772 0 0 0.131603,-0.06959 z m -0.131603,0.06959 a 12.000958,11.998052 65.744772 0 1 -1.093134,0.537091 12.000056,11.999994 0 0 0 1.093134,-0.537091 z m -1.093134,0.537091 a 12.000056,11.999994 0 0 1 -0.268719,0.117135 12.000958,11.998052 65.744772 0 0 0.268719,-0.117135 z m -0.268719,0.117135 a 12.000958,11.998052 65.744772 0 1 -1.199244,0.410309 12.000056,11.999994 0 0 0 1.199244,-0.410309 z m -1.199244,0.410309 a 12.000056,11.999994 0 0 1 -0.306959,0.08234 12.000958,11.998052 65.744772 0 0 0.306959,-0.08234 z m -0.306959,0.08234 a 12.000958,11.998052 65.744772 0 1 -1.26539,0.260104 12.000056,11.999994 0 0 0 1.26539,-0.260104 z m -1.26539,0.260104 a 12.000056,11.999994 0 0 1 -0.202228,0.02273 12.000958,11.998052 65.744772 0 0 0.202228,-0.02273 z m -0.202228,0.02273 a 12.000958,11.998052 65.744772 0 1 -1.223359,0.09302 12.000056,11.999994 0 0 0 1.223359,-0.09302 z m -1.223359,0.09302 a 12.000056,11.999994 0 0 1 -0.146073,0.0055 c -7.58e-4,0.0023 -0.0013,0.0035 -0.0021,0.0059 a 12.000958,11.998052 65.744772 0 0 0.148139,-0.01136 z m -0.146073,0.0055 c 0.893718,-2.726547 1.509812,-4.643468 1.937876,-5.871475 a 10.414974,10.41245 65.738504 0 0 3.562246,-1.726337 9.9704929,9.9680786 65.733743 0 0 1.471408,-1.232997 5.7378319,5.7364424 65.735716 0 0 1.257464,-2.014692 5.9903774,5.9889268 65.736345 0 0 -0.841296,-5.600688 1.5152725,1.5149055 65.73288 0 0 -0.450275,-0.4351159 0.6566181,0.65645907 65.735918 0 0 -0.415827,-0.092673 0.67682173,0.67665782 65.738936 0 0 -0.382405,0.1922359 0.68692353,0.68675717 65.739735 0 0 -0.176046,0.5460477 5.6671192,5.6657467 65.735251 0 0 0.345199,1.3584 7.1621878,7.1604535 65.736618 0 1 0.241848,0.767567 3.8891995,3.8882576 65.732899 0 1 -0.64148,2.9186833 5.6772211,5.6758461 65.735286 0 1 -0.698324,0.912261 6.1924136,6.190914 65.735441 0 1 -1.53652,1.169609 7.9501298,7.9482047 65.738496 0 1 -0.878504,0.415479 l 0.05235,-0.272498 A 10.45538,10.452848 65.732707 0 0 14.599455,11.316951 7.293512,7.2917454 65.736921 0 0 13.879425,8.5433063 5.8085447,5.807138 65.735153 0 0 11.714862,6.0731742 5.6469156,5.645548 65.734306 0 0 8.0303494,5.3228053 6.3237373,6.3222059 65.736724 0 0 4.5831706,7.1046077 5.2327411,5.2314738 65.735851 0 0 3.8572855,8.0744019 C 2.4915706,10.434166 3.3341431,13.269932 4.7161519,15.096191 a 7.3036136,7.3018448 65.740053 0 0 4.823845,2.59519 C 9.3951222,17.972144 8.0183,19.920416 6.4631681,22.329167 a 12.000056,11.999994 0 0 0 4.9368449,1.070734 12.000056,11.999994 0 0 0 0.156407,-0.0059 z M 6.4631839,22.329157 a 12.000056,11.999994 0 0 1 -0.1915482,-0.08337 12.000958,11.998052 65.744772 0 0 0.1856917,0.09267 c 0.00204,-0.0031 0.00382,-0.0061 0.00586,-0.0094 z M 6.2716357,22.245786 A 12.000958,11.998052 65.744772 0 1 6.0246212,22.122451 12.000056,11.999994 0 0 0 6.2716357,22.245786 Z M 6.0246212,22.122451 A 12.000056,11.999994 0 0 1 5.4734033,21.830997 12.000958,11.998052 65.744772 0 0 6.0246212,22.122451 Z M 5.4734033,21.830997 a 12.000958,11.998052 65.744772 0 1 -0.248048,-0.148485 12.000056,11.999994 0 0 0 0.248048,0.148485 z M 5.2253553,21.682512 A 12.000056,11.999994 0 0 1 4.7072105,21.357297 12.000958,11.998052 65.744772 0 0 5.2253553,21.682512 Z M 4.7072105,21.357297 A 12.000958,11.998052 65.744772 0 1 4.4622631,21.183664 12.000056,11.999994 0 0 0 4.7072105,21.357297 Z M 4.4622631,21.183664 a 12.000056,11.999994 0 0 1 -0.4857608,-0.35898 12.000958,11.998052 65.744772 0 0 0.4857608,0.35898 z M 3.9765023,20.824684 A 12.000958,11.998052 65.744772 0 1 3.7463689,20.633828 12.000056,11.999994 0 0 0 3.9765023,20.824684 Z M 3.7463689,20.633828 A 12.000056,11.999994 0 0 1 3.288858,20.240397 12.000958,11.998052 65.744772 0 0 3.7463689,20.633828 Z M 3.288858,20.240397 A 12.000958,11.998052 65.744772 0 1 3.0656147,20.024389 12.000056,11.999994 0 0 0 3.288858,20.240397 Z M 3.0656147,20.024389 a 12.000056,11.999994 0 0 1 -0.417892,-0.41789 12.000958,11.998052 65.744772 0 0 0.417892,0.41789 z m -0.417892,-0.41789 A 12.000958,11.998052 65.744772 0 1 2.4258575,19.355698 12.000056,11.999994 0 0 0 2.6477227,19.606499 Z M 2.4258575,19.355698 A 12.000056,11.999994 0 0 1 2.058264,18.928849 12.000958,11.998052 65.744772 0 0 2.4258575,19.355698 Z M 2.058264,18.928849 A 12.000958,11.998052 65.744772 0 1 1.8408775,18.642218 12.000056,11.999994 0 0 0 2.058264,18.928849 Z M 1.8408775,18.642218 a 12.000056,11.999994 0 0 1 -0.3242009,-0.439585 12.000958,11.998052 65.744772 0 0 0.324185,0.439593 z M 1.5166766,18.202633 A 12.000958,11.998052 65.744772 0 1 1.3209943,17.898431 12.000056,11.999994 0 0 0 1.5166766,18.202633 Z M 1.3209943,17.898431 A 12.000056,11.999994 0 0 1 1.0312604,17.437478 12.000958,11.998052 65.744772 0 0 1.3209943,17.898431 Z M 1.0312604,17.437478 A 12.000958,11.998052 65.744772 0 1 0.8555597,17.111916 12.000056,11.999994 0 0 0 1.0312604,17.437478 Z M 0.8555597,17.111916 a 12.000056,11.999994 0 0 1 -0.24873708,-0.46991 12.000958,11.998052 65.744772 0 0 0.24873708,0.46991 z M 0.60682262,16.642006 A 12.000958,11.998052 65.744772 0 1 0.44214624,16.271658 12.000056,11.999994 0 0 0 0.60682262,16.642006 Z M 0.44214624,16.271658 A 12.000056,11.999994 0 0 1 0.24232981,15.813115 12.000958,11.998052 65.744772 0 0 0.44214624,16.271658 Z M 0.24232981,15.813115 A 12.000958,11.998052 65.744772 0 1 0.09453453,15.399016 12.000056,11.999994 0 0 0 0.24232981,15.813115 Z M 0.09453453,15.399016 a 12.000056,11.999994 0 0 1 -0.15296296,-0.437184 12.000958,11.998052 65.744772 0 0 0.15296296,0.437184 z m -0.15296296,-0.437184 a 12.000958,11.998052 65.744772 0 1 -0.13367035,-0.491957 12.000056,11.999994 0 0 0 0.13367035,0.491957 z m -0.13367035,-0.491957 a 12.000056,11.999994 0 0 1 -0.10266431,-0.383096 12.000958,11.998052 65.744772 0 0 0.10266431,0.383096 z m -0.10266431,-0.383096 a 12.000958,11.998052 65.744772 0 1 -0.0988747,-0.516074 12.000056,11.999994 0 0 0 0.0988747,0.516074 z m -0.0988747,-0.516074 a 12.000056,11.999994 0 0 1 -0.0716584,-0.378271 12.000958,11.998052 65.744772 0 0 0.0716584,0.378271 z m -0.0716584,-0.378271 a 12.000958,11.998052 65.744772 0 1 -0.1012863,-0.899515 12.000056,11.999994 0 0 0 0.1012863,0.899515 z M 8.6211861,8.0699232 a 2.586065,2.5854387 65.737933 0 1 0.8599,0.156752 2.8992214,2.8985193 65.735141 0 1 1.3205109,1.1630634 4.5054102,4.5043192 65.736687 0 1 0.751723,2.1301014 5.8590537,5.8576348 65.734944 0 1 -0.160197,2.274452 10.253344,10.250861 65.745726 0 1 -0.630799,1.511017 A 5.0509084,5.0496851 65.735714 0 1 7.4646621,14.1984 4.6872429,4.6861078 65.736828 0 1 5.7961946,11.11263 2.8386105,2.8379232 65.736315 0 1 6.0759375,9.5575143 2.5153524,2.5147432 65.736599 0 1 6.4803937,8.9932082 2.9598322,2.9591155 65.733077 0 1 7.5538904,8.2886864 2.586065,2.5854387 65.737933 0 1 8.6211861,8.0699232 Z"
            />
          </svg>
        </div>
        <div
          class="css-1d3u6l5"
        />
      </div>
    `);
  });
});
