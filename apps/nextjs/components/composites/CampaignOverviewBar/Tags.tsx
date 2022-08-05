import { HStack, Tag } from "@josulliv101/core";

interface Props {
  items: string[];
}

export const Tags: React.FC<Props> = ({ items = [] }) => {
  return (
    <HStack
      spacing="1"
      mb={{ base: 6, md: 2, lg: 1 }}
    >
      {items && items.map((t) => <Tag key={t}>#{t}</Tag>)}
    </HStack>
  );
};
