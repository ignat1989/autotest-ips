{
  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve");
    }, 1000);
    setTimeout(() => {
      reject("reject");
    }, 100);
  });

  async function print(): Promise<void> {
    try {
      const result: string = await promise;
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  print();
}
