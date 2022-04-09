import React from 'react';

import { 
    TitleUtilities,
    UtilitiesActions
} from './styles';

import { RiUserStarFill } from "react-icons/ri";
import { BiLinkAlt } from "react-icons/bi";
import { SiGnuprivacyguard } from 'react-icons/si'

import Router from 'next/router'

const utilities: React.FC = () => {
  return (
  <>
    <TitleUtilities>Utilidades</TitleUtilities>

    <UtilitiesActions>

      <button onClick={() => Router.push('/admin/invitations')}>
        <div>
          <RiUserStarFill size={25} color="black" />
        </div>
        Meus convidados
      </button>

      <button>
        <div>
          <BiLinkAlt size={25} color="black" />
        </div>
        Gerar link de convite
      </button>

      <button onClick={() => Router.push('/admin/registers')}>
        <div>
          <SiGnuprivacyguard size={25} color="black" />
        </div>
        Solicitações de cadastro
      </button>
      
    </UtilitiesActions>
  </>
  );
}

export default utilities;