import { isSolanaRequest } from '../is-solana-request';

describe('isSolanaRequest', () => {
    it('returns true if the method name is from the Solana RPC API', () => {
        const request = { methodName: 'getBalance', params: ['1234..5678'] };
        expect(isSolanaRequest(request)).toBe(true);
    });
    it('returns false if the method name is not from the Solana RPC API', () => {
        const request = { methodName: 'getAssetsByAuthority', params: ['1234..5678'] };
        expect(isSolanaRequest(request)).toBe(false);
    });
});
