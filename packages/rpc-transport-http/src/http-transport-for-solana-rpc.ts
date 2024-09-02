import { RpcRequest, RpcTransport } from '@solana/rpc-spec';
import type Dispatcher from 'undici-types/dispatcher';

import { createHttpTransport } from './http-transport';
import { AllowedHttpRequestHeaders } from './http-transport-headers';
import { isSolanaRequest } from './is-solana-request';
import { parseJsonWithBigInts } from './parse-json-with-bigints';
import { stringifyJsonWithBigints } from './stringify-json-with-bigints';

type Config = Readonly<{
    dispatcher_NODE_ONLY?: Dispatcher;
    headers?: AllowedHttpRequestHeaders;
    url: string;
}>;

export function createHttpTransportForSolanaRpc(config: Config): RpcTransport {
    return createHttpTransport({
        ...config,
        fromJson: (rawResponse: string, request: RpcRequest) =>
            isSolanaRequest(request) ? parseJsonWithBigInts(rawResponse) : JSON.parse(rawResponse),
        toJson: (payload: unknown, request: RpcRequest) =>
            isSolanaRequest(request) ? stringifyJsonWithBigints(payload) : JSON.stringify(payload),
    });
}
