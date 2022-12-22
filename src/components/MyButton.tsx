function MyButton({ title, count, onClick }: any) {
  return (
    <button onClick={onClick}>
      {title} {count}
    </button>
  );
}

export default MyButton;
