import { Card, CardBody } from "@nextui-org/react";

export default async function Home() {
  return (
    <Card className='mx-auto mt-4 max-w-md'>
      <CardBody className='text-center'>
        <h1 className='text-5xl'>Next Start</h1>
        <p className='text-xl'>A simple starter for next.js</p>
      </CardBody>
    </Card>
  );
}
