import React from 'react';
import InfoPageLayout from './shared/InfoPageLayout';
import StockListItem from './shared/StockListItem';
import { STOCKS_LIST } from '../../config/infoPageContent';

function StocksPage() {
  return (
    <InfoPageLayout title="Акции">
      {STOCKS_LIST.map((stock) => (
        <StockListItem
          key={stock.id}
          title={stock.title}
          description={stock.description}
          validUntil={stock.validUntil}
          link={stock.link}
          linkLabel={stock.linkLabel}
        />
      ))}
    </InfoPageLayout>
  );
}

export default StocksPage;
