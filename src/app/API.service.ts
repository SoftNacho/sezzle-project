/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export type CreateCalculationInput = {
  id?: string | null;
  timestamp: number;
  calcul: string;
};

export type ModelCalculationConditionInput = {
  timestamp?: ModelIntInput | null;
  calcul?: ModelStringInput | null;
  and?: Array<ModelCalculationConditionInput | null> | null;
  or?: Array<ModelCalculationConditionInput | null> | null;
  not?: ModelCalculationConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateCalculationInput = {
  id: string;
  timestamp?: number | null;
  calcul?: string | null;
};

export type DeleteCalculationInput = {
  id?: string | null;
};

export type ModelCalculationFilterInput = {
  id?: ModelIDInput | null;
  timestamp?: ModelIntInput | null;
  calcul?: ModelStringInput | null;
  and?: Array<ModelCalculationFilterInput | null> | null;
  or?: Array<ModelCalculationFilterInput | null> | null;
  not?: ModelCalculationFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateCalculationMutation = {
  __typename: "Calculation";
  id: string;
  timestamp: number;
  calcul: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCalculationMutation = {
  __typename: "Calculation";
  id: string;
  timestamp: number;
  calcul: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCalculationMutation = {
  __typename: "Calculation";
  id: string;
  timestamp: number;
  calcul: string;
  createdAt: string;
  updatedAt: string;
};

export type GetCalculationQuery = {
  __typename: "Calculation";
  id: string;
  timestamp: number;
  calcul: string;
  createdAt: string;
  updatedAt: string;
};

export type ListCalculationsQuery = {
  __typename: "ModelCalculationConnection";
  items: Array<{
    __typename: "Calculation";
    id: string;
    timestamp: number;
    calcul: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCalculationSubscription = {
  __typename: "Calculation";
  id: string;
  timestamp: number;
  calcul: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCalculationSubscription = {
  __typename: "Calculation";
  id: string;
  timestamp: number;
  calcul: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCalculationSubscription = {
  __typename: "Calculation";
  id: string;
  timestamp: number;
  calcul: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCalculation(
    input: CreateCalculationInput,
    condition?: ModelCalculationConditionInput
  ): Promise<CreateCalculationMutation> {
    const statement = `mutation CreateCalculation($input: CreateCalculationInput!, $condition: ModelCalculationConditionInput) {
        createCalculation(input: $input, condition: $condition) {
          __typename
          id
          timestamp
          calcul
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCalculationMutation>response.data.createCalculation;
  }
  async UpdateCalculation(
    input: UpdateCalculationInput,
    condition?: ModelCalculationConditionInput
  ): Promise<UpdateCalculationMutation> {
    const statement = `mutation UpdateCalculation($input: UpdateCalculationInput!, $condition: ModelCalculationConditionInput) {
        updateCalculation(input: $input, condition: $condition) {
          __typename
          id
          timestamp
          calcul
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCalculationMutation>response.data.updateCalculation;
  }
  async DeleteCalculation(
    input: DeleteCalculationInput,
    condition?: ModelCalculationConditionInput
  ): Promise<DeleteCalculationMutation> {
    const statement = `mutation DeleteCalculation($input: DeleteCalculationInput!, $condition: ModelCalculationConditionInput) {
        deleteCalculation(input: $input, condition: $condition) {
          __typename
          id
          timestamp
          calcul
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCalculationMutation>response.data.deleteCalculation;
  }
  async GetCalculation(id: string): Promise<GetCalculationQuery> {
    const statement = `query GetCalculation($id: ID!) {
        getCalculation(id: $id) {
          __typename
          id
          timestamp
          calcul
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCalculationQuery>response.data.getCalculation;
  }
  async ListCalculations(
    filter?: ModelCalculationFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCalculationsQuery> {
    const statement = `query ListCalculations($filter: ModelCalculationFilterInput, $limit: Int, $nextToken: String) {
        listCalculations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            timestamp
            calcul
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCalculationsQuery>response.data.listCalculations;
  }
  OnCreateCalculationListener: Observable<
    OnCreateCalculationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCalculation {
        onCreateCalculation {
          __typename
          id
          timestamp
          calcul
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateCalculationSubscription>;

  OnUpdateCalculationListener: Observable<
    OnUpdateCalculationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCalculation {
        onUpdateCalculation {
          __typename
          id
          timestamp
          calcul
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateCalculationSubscription>;

  OnDeleteCalculationListener: Observable<
    OnDeleteCalculationSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCalculation {
        onDeleteCalculation {
          __typename
          id
          timestamp
          calcul
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteCalculationSubscription>;
}
