import { useState, useEffect } from 'react';
import styled from 'styled-components';

// カスタムイベントの型設定
declare global {
  interface DocumentEventMap {
    ButtonClick: CustomEvent<Date>;
  }
}

const Content = styled.div`
  border: solid 1px black;
  width: fit-content;
  padding: 4px;
`;

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('ja-jp', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(date);
};

const EventReceiver = () => {
  const [log, setLog] = useState('');
  useEffect(() => {
    document.addEventListener('ButtonClick', appendEventLog);
    return () => {
      document.removeEventListener('ButtonClick', appendEventLog);
    };
  }, []);

  function appendEventLog(data: CustomEvent<Date>) {
    setLog((value) => value + formatDate(data.detail) + '\r\n');
  }

  return (
    <Content>
      <p>React Component</p>
      <textarea value={log} style={{ height: '10em' }}></textarea>
    </Content>
  );
};
export default EventReceiver;
