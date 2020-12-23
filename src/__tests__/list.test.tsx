/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
import React from 'react';
import { getByRole, getByTestId, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import Lista from '../components/List/list';

const ListaProdutos = {
  Produtos: [
    {
      id: 1,
      nome: 'Playstation 5',
      peso: 1.0,
      preco: 1.0,
      qtd: 100,
    },
    {
      id: 2,
      nome: 'Xbox 1',
      peso: 1.0,
      preco: 1.0,
      qtd: 200,
    },
    {
      id: 3,
      nome: 'Nintendo',
      peso: 1.0,
      preco: 1.0,
      qtd: 300,
    },
  ],
};

describe('Tests for list component', () => {
  it('Should ', async () => {
    render(
      <RecoilRoot>
        <Lista content={ListaProdutos.Produtos} parent="outro" />
      </RecoilRoot>,
    );

    expect(ListaProdutos.Produtos.length).toBe(3);
    const li = screen.getByLabelText('listagem');
    expect(li.getElementsByTagName('li').length).toBe(3);
  });
});