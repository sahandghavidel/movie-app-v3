export default function Results({ results }) {
  return (
    <main>
      {results.map((result) => (
        <h1>{result.title}</h1>
      ))}
    </main>
  );
}
