import { graphql } from "relay-runtime";

import type { GraphQLSubscriptionConfig } from "relay-runtime";
import type {
  BookAddedSubscription,
  BookAddedSubscription$data,
} from "./__generated__/BookAddedSubscription.graphql";
import { useSubscription } from "react-relay";
import { useMemo } from "react";

export function useBookAddedSubscription(
  onError?: (error: Error) => void,
  onNext?: (response: BookAddedSubscription$data) => void
) {
  return useSubscription<BookAddedSubscription>(
    useMemo(
      () =>
        ({
          subscription: graphql`
            subscription BookAddedSubscription {
              onBookAdded {
                id
                ...BookDetails_book
              }
            }
          `,
          variables: {},
          onError: onError,
          onNext: (response) => {
            onNext?.(response as BookAddedSubscription$data);
          },
        } satisfies GraphQLSubscriptionConfig<BookAddedSubscription>),
      [onError, onNext]
    )
  );
}
