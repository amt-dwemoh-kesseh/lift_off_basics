/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Author of a complete Track */
export type Author = {
  __typename?: 'Author';
  id: Scalars['ID']['output'];
  /** Author's name */
  name: Scalars['String']['output'];
  /** photo of the author */
  photo?: Maybe<Scalars['String']['output']>;
};

/** A track is a group of Modules that teaches about a specific topic */
export type Query = {
  __typename?: 'Query';
  /** Query to get tracks array for the homepage grid */
  tracksForHome: Array<Track>;
};

/** A track is a group of Modules that teaches about a specific topic */
export type Track = {
  __typename?: 'Track';
  /** author of the track */
  author: Author;
  id: Scalars['ID']['output'];
  /** length of the track in seconds */
  length?: Maybe<Scalars['Int']['output']>;
  /** modules count the track contains */
  modulesCount?: Maybe<Scalars['Int']['output']>;
  /** the track's main illustration */
  thumbnail?: Maybe<Scalars['String']['output']>;
  /** title of the track */
  title: Scalars['String']['output'];
};

export type GetTracksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTracksQuery = { __typename?: 'Query', tracksForHome: Array<{ __typename?: 'Track', id: string, title: string, thumbnail?: string | null, modulesCount?: number | null, length?: number | null, author: { __typename?: 'Author', id: string, name: string, photo?: string | null } }> };


export const GetTracksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTracks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tracksForHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}},{"kind":"Field","name":{"kind":"Name","value":"modulesCount"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"photo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]} as unknown as DocumentNode<GetTracksQuery, GetTracksQueryVariables>;