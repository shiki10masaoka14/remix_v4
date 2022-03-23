import { VFC } from "react";
import { LoaderFunction, useLoaderData } from "remix";
import { AssetsDocument } from "~/graphql/graphCMS/generated";
import { graphCMSResolver } from "~/graphql/graphCMS/resolver";

// ここまで
//
//
//
// ここから

// export const loader: LoaderFunction = async () => {
//   const { data } = await graphCMSResolver(
//     AssetsDocument.loc?.source.body,
//     {
//       OR: [
//         {
//           fileName: "logo.png",
//         },
//       ],
//     },
//   );

//   return { data };
// };

// ここまで
//
//
//
// ここから

const Index: VFC = () => {
  // const { data } = useLoaderData();
  // console.log(data);

  return <>インデック</>;
};
export default Index;
