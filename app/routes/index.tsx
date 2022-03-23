import { VFC } from "react";
import {
  LinksFunction,
  LoaderFunction,
  useLoaderData,
} from "remix";
import { AssetsDocument } from "~/graphql/graphCMS/generated";
import { graphCMSResolver } from "~/graphql/graphCMS/resolver";
import styles from "~/styles/index.css";

// ここまで
//
//
//
// ここから

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

// ここまで
//
//
//
// ここから

export const loader: LoaderFunction = async () => {
  const { data } = await graphCMSResolver(
    AssetsDocument.loc?.source.body,
    {
      OR: [
        {
          fileName: "logo.png",
        },
      ],
    },
  );

  return { data };
};

// ここまで
//
//
//
// ここから

const Index: VFC = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <div className="layout">
        <h1>インデックス</h1>
      </div>
    </>
  );
};
export default Index;
