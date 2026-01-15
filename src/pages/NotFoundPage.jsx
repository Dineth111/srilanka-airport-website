import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <PageTransition>
      <Container className="py-16">
        <div className="max-w-xl">
          <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
          <p className="mt-2 text-slate-600">
            The page you’re looking for doesn’t exist. Use the navigation or go back home.
          </p>
          <div className="mt-6">
            <Button as={Link} to="/">
              Back to Home
            </Button>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
