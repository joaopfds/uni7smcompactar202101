'use strict';

import { expect } from 'chai';
import { AlgoritmosCompressao } from '../src/index';

describe('AlgoritmosCompressao class', () => {
	it('should create an instance using its constructor', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		expect(example, 'example should exit').to.exist; // tslint:disable-line:no-unused-expression
	});

	it('Testa o metodo comprimeFequenciaCaractere com o texto AAAAAHHHFGGGGBBPEEECCCCCCDLLLLRR', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'AAAAAHHHFGGGGBBPEEECCCCCCDLLLLRR';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('5A3HF4G2BP3E6CD4L2R', 'returns the value passed as a parameter');
	});

	it('Testa o metodo comprimeFequenciaCaractere com o texto AB', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'AB';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('AB', 'returns the value passed as a parameter');
	});

	it('Testa o metodo comprimeFequenciaCaractere com o texto vazio', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '                                    ';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('36 ', 'returns the value passed as a parameter');
	});

	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A2B12C', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '1A2B2C';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('ABBCC', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 10A2B2C', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '10A2B2C';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('AAAAAAAAAABBCC', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 10A12B2C', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '10A12B2C';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('AAAAAAAAAABBBBBBBBBBBBCC', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '1A';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('A', 'returns the value passed as a parameter');
	});
	it('Testa o metodo descomprimeFequenciaCaractere com o texto 1A100B', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '1A90B';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('ABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB', 'returns the value passed as a parameter');
	});

	it('Testa o metodo descomprimeFequenciaCaractere com o texto AB', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'AB';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('AB', 'returns the value passed as a parameter');
	});

	// TESTES NOVOS
	it('Testa o metodo comprimeFequenciaCaractere com texto ', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'ABCDE';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('ABCDE', 'returns the value passed as a parameter');
	});

	it('Testa o metodo descomprimeFequenciaCaractere com texto', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'AB2CD1E';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('ABCCDE', 'returns the value passed as a parameter');
	});

	it('Testa o metodo descomprimeFequenciaCaractere com texto', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '1A1B1C1D1E';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('ABCDE', 'returns the value passed as a parameter');
	});

	it('Testa o metodo comprimeFequenciaCaractere com texto ', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'AABCCDEE';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('2AB2CD2E', 'returns the value passed as a parameter');
	});

	it('Testa o metodo descomprimeFequenciaCaractere com texto', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = '3A1B2C1D2E';
		const returnValue: string = example.descomprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('AAABCCDEE', 'returns the value passed as a parameter');
	});


});