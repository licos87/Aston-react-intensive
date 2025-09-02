import type { ReactNode } from 'react';

type ItemListProps<T extends { id: string | number }> = {
  data: T[];
  renderItem: (item: T) => ReactNode;
};

export const ItemList = <T extends { id: string | number }>({
  data,
  renderItem,
}: ItemListProps<T>): ReactNode => {
  return (
    <ul className="list">
      {data.map((item) => (
        <li key={item.id}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
