```javascript
// pages/index.js
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <MyComponent />
      </Suspense>
    </div>
  );
}

function MyComponent() {
  const { data, error } = useAsyncData();

  if (error) {
    return <p>Error loading data</p>;
  }

  if (!data) {
    // Suspense handles this state 
    throw new Error('Data not loaded yet');
  }

  return (
    <p>{data.message}</p>
  );
}

function useAsyncData(){
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try{
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setData({ message: 'Data fetched!' });
      } catch (err){
        setError(err);
      }
    };
    fetchData();
  }, []);

  return { data, error };
}
```