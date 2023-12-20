import { ParsedUrlQuery } from 'querystring';

import { LayoutCustomError } from '@/layouts';
import { ClientErrorScreen } from '@/modules';

import { NextPageWithLayout } from './_app';

type InitialPropsResponse = {
  statusCode?: number;
  error: {
    pathname: string;
    query: ParsedUrlQuery;
    err?: (Error & { statusCode?: number | undefined }) | null;
  };
};

const Error: NextPageWithLayout<InitialPropsResponse> = () => <ClientErrorScreen />;

Error.getLayout = function getLayout(page) {
  return (
    <LayoutCustomError title="Erro no carregamento da aplicação - Top Multiplicadores">
      {page}
    </LayoutCustomError>
  );
};

Error.getInitialProps = ({ pathname, query, err, res }): InitialPropsResponse => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return {
    statusCode,
    error: {
      pathname,
      query,
      err,
    },
  };
};

export default Error;
