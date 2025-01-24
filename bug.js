```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This component will cause an error in Next.js 15 if not properly handled */}
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  // Simulate an asynchronous operation
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData({ message: 'Data fetched!' });
    };
    fetchData();
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <p>{data.message}</p>
  );
}
```