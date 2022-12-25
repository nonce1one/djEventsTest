import { FaExclamationTriangle } from 'react-icons/fa';
import React from 'react';
import Layout from '@/components/Layout';
import styles from '@/styles/404.module.css';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <Layout title="Page not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle />
          404
        </h1>
        <h5>Sorry, there is nothing here</h5>
        <Link href="/">Go Back Home</Link>
      </div>
    </Layout>
  );
}
