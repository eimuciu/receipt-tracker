import { useState } from 'react';
import type { NextPage } from 'next';
import type { Receipt, Expense } from '../src/types/types';
import Head from 'next/head';
import css from '../styles/Home.module.scss';
import Header from '../src/components/Header/Header';
import TotalCounter from '../src/components/TotalCounter/TotalCounter';
import ReceiptsList from '../src/components/ReceiptsList/ReceiptsList';
import { nanoid } from 'nanoid';
import { calcTotalSpent } from '../src/utils/calcTotalSpent';

const expense: Expense[] = [
  { id: '1', note: 'Bough something', price: 2.22 },
  { id: '2', note: 'One more', price: 3.33 },
];

const exampleReceipt: Receipt = {
  id: '1',
  category: 'Sport',
  expense: expense,
};

const Home: NextPage = () => {
  const [receipts, setReceipts] = useState<Receipt[]>([]);

  const handleAddReceipt = () => {
    setReceipts((prev) => [
      ...prev,
      { id: nanoid(), category: '', expense: [] },
    ]);
  };

  const handleAddExpense = (receiptId: string) => {
    setReceipts((prev) =>
      prev.map((sRec) =>
        sRec.id === receiptId
          ? {
              ...sRec,
              expense: [
                ...sRec.expense,
                { id: nanoid(), note: '', price: null },
              ],
            }
          : sRec,
      ),
    );
  };

  const handleUpdateExpense = (receiptId: string, expense: Expense) => {
    setReceipts((prev) =>
      prev.map((sRec) =>
        sRec.id === receiptId
          ? {
              ...sRec,
              expense: sRec.expense.map((sExp) =>
                sExp.id === expense.id ? expense : sExp,
              ),
            }
          : sRec,
      ),
    );
  };

  return (
    <div className={css.main}>
      <Head>
        <title>Receipt tracker</title>
        <meta name="description" content="Receipt tracker" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <nav></nav>
      <header>
        <Header handleAddReceipt={handleAddReceipt} />
      </header>
      <main>
        <TotalCounter totalSpendings={calcTotalSpent(receipts)} />
        <ReceiptsList
          receipts={receipts}
          handleAddExpense={handleAddExpense}
          handleUpdateExpense={handleUpdateExpense}
        />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
