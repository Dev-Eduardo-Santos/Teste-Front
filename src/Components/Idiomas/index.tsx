import React, { useState } from 'react';
import * as Styled from './styled';
import Image from 'next/image';

import Pt from '../../../public/idiomas/language-1.svg';
import Es from '../../../public/idiomas/language-2.svg';
import En from '../../../public/idiomas/language.svg';

interface IdiomasProps {
  visible: boolean;
  onClose: () => void;
}

const Idiomas: React.FC<IdiomasProps> = ({ visible, onClose }) => {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  };

  const handleMouseLeave = () => {
    setTimeoutId(
      setTimeout(() => {
        onClose();
      }, 300)
    );
  };

  return (
    <Styled.CardContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ display: visible ? 'block' : 'none' }}>
      <Styled.itemSection>
        <Image src={Pt} width={50} height={16} alt={'pt'}  />
      </Styled.itemSection>
      <Styled.itemSection>
        <Image src={Es} width={50} height={16} alt={'pt'}  />
      </Styled.itemSection>
      <Styled.itemSection>
        <Image src={En} width={50} height={16} alt={'pt'}  />
      </Styled.itemSection>

    </Styled.CardContainer>
  );
};

export default Idiomas;
