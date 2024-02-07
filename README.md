# Graphql query builder

This npm package aims to simplify the process of creating GraphQL queries by providing a type-first approach. It addresses common issues such as mistyped field names and inconsistencies between query fields and types.

With this package, you can:

1. Define the type upfront to streamline GraphQL query construction, ensuring clarity and consistency in your codebase.
2. Use TypeScript and VS Code functionalities to enable intelligent auto-completion tailored to the defined type, enhancing development efficiency.
3. Use TypeScript's capabilities to automatically infer the data types returned by the GraphQL queries constructed using this package, eliminating manual type writing.

## Installation:

```shell
npm install gql-ts-builder
```

## Example:

```typescript
import { useQuery, gql, DocumentNode } from "@apollo/client";
import { createQueryBuilder, InferSelection } from "gql-ts-builder";

// Define types
type User = {
  id: string;
  name?: string;
  email: string;
};

// Set up query builder
const buildUserQuery = createQueryBuilder<User, DocumentNode>(
  (selection) => gql`
    query User {
        user {
            ${selection}
        }
    }
`
);

// Construct a query
const query = buildUserQuery({
  id: true,
  name: true,
});

// Infer result types
// Payload type will be { id: string; name?: string; }
type Payload = InferSelection<typeof query>;

type Data = {
  user: Payload;
};

// Create custom hook
export const useUser = () => {
  const { data, loading, error } = useQuery<Data>(query);

  return {
    userData: data?.user,
    userLoading: loading,
    userError: error,
  };
};
```

This package aims to enhance the developer experience when working with GraphQL, reducing errors and improving productivity.
