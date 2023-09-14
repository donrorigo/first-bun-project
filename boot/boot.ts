
Bun.serve({
    port: 8080,
    fetch(req: Request) {

      // 1. Map the value to dto classes

      // 2. Apply validations to these classes

      // 3. Invoke to RestController class methods
      
      return new Response("Bun!");
    },
    error(error) {
        // TODO: here we should define the strategy for different exception handling
    }
  });
  