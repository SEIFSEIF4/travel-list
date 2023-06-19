export default function Stats({ items }) {
  const itemLength = items.length;

  if (!itemLength)
    return (
      <p className="stats">
        <em>Start Add Some Items 👍</em>
      </p>
    );

  const itemPacked = items.filter((item) => item.packed).length;
  const itemPercentage = Math.round((itemPacked / itemLength) * 100);

  return (
    <footer className="stats">
      <em>
        {itemPercentage === 100
          ? `🎉 You Finished `
          : `💼 You
        have ${itemLength} items on your list, and you already packed
        ${itemPacked} (${itemPercentage}%)`}
      </em>
    </footer>
  );
}
