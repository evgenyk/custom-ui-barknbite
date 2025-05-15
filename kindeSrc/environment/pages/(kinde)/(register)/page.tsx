"use server";

import { type KindePageEvent } from "@kinde/infrastructure";
import React from "react";
import { renderToString } from "react-dom/server.browser";
import { Widget } from "../../../../components/widget";
import { DefaultLayout } from "../../../../layouts/default";
import { Root } from "../../../../root";

export const pageSettings = {
    failurePolicy: {
      action: 'fallback'
    }
};

const DefaultPage: React.FC<KindePageEvent> = ({ context, request }) => {
  return (
    <Root context={context} request={request}>
      <DefaultLayout isRegisterPage={true}>
        <h1>Hello</h1>
        <Widget heading={context.widget.content.heading} />
      </DefaultLayout>
    </Root>
  );
};

// Page Component
export default async function Page(event: KindePageEvent): Promise<string> {
  //throw new Error("broken on purpose to test fallback!");
  const page = await DefaultPage(event);
  return renderToString(page);
}
