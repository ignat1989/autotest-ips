{
  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolve");
    }, 1000);
  });

  async function print() {
    const result: string = await promise;
    console.log(result);
  }

  print();
}
