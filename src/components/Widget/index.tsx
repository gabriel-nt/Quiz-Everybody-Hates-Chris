import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { Container, Header, Content, Image, ChevronLeft } from './styles';

interface WidgetProps {
  title: string;
  image?: string;
  chevronLeft?: boolean;
  children: React.ReactNode;
}

const Widget: React.FC<WidgetProps> = ({
  title,
  image,
  children,
  chevronLeft,
}) => {
  const router = useRouter();

  const handleGoToHome = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Container
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '20%' },
      }}
      initial="hidden"
      animate="show"
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <Header>
        {chevronLeft && (
          <ChevronLeft
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleGoToHome}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </ChevronLeft>
        )}

        <h1>{title}</h1>
      </Header>

      {image && <Image src={image} />}

      <Content>{children}</Content>
    </Container>
  );
};

export default Widget;
