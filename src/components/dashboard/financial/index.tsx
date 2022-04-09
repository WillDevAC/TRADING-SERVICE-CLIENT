import React from 'react';

import { 
    TitleFinancial,
    FinancialActions
} from './styles';

import { GrMoney } from "react-icons/gr";
import { GiBanknote } from 'react-icons/gi'
import { AiFillSafetyCertificate } from 'react-icons/ai'

import Router from 'next/router'

const financial: React.FC = () => {
  return (
  <>
    <TitleFinancial>Financeiro</TitleFinancial>

    <FinancialActions>

      <button onClick={() => Router.push('/admin/withdrawal')}>
        <div>
          <GiBanknote size={25} color="black" />
        </div>
        Solicitações de saque
      </button>

      <button onClick={() => Router.push('/admin/deposit')}>
        <div>
          <AiFillSafetyCertificate size={25} color="black" />
        </div>
        Solicitações de déposito
      </button>

      <button>
        <div>
          <GrMoney size={25} color="black" />
        </div>
        Definir rendimentos
      </button>
      
    </FinancialActions>
  </>
  );
}

export default financial;