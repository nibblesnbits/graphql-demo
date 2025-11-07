export default {
  schema: [
    "./web/vite-graphql/schema.graphql",
    "./web/vite-graphql/relay-compiler-directives-v10.0.1.graphql",
  ],

  documents: ["./web/vite-graphql/src/**/*.{graphql,js,ts,jsx,tsx}"],
};
