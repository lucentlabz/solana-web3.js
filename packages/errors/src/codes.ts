/**
 * To add a new error, follow the instructions at
 * https://github.com/solana-labs/solana-web3.js/tree/master/packages/errors/#adding-a-new-error
 *
 * WARNING:
 *   - Don't remove error codes
 *   - Don't change or reorder error codes.
 *
 * Good naming conventions:
 *   - Prefixing common errors — e.g. under the same package — can be a good way to namespace them. E.g. All codec-related errors start with `SOLANA_ERROR__CODECS_`.
 *   - Use consistent names — e.g. choose `PDA` or `PROGRAM_DERIVED_ADDRESS` and stick with it. Ensure your names are consistent with existing error codes. The decision might have been made for you.
 *   - Recommended prefixes and suffixes:
 *     - `MALFORMED_`: Some input was not constructed properly. E.g. `MALFORMED_BASE58_ENCODED_ADDRESS`.
 *     - `INVALID_`: Some input is invalid (other than because it was MALFORMED). E.g. `INVALID_NUMBER_OF_BYTES`.
 *     - `EXPECTED_`: Some input was different than expected, no need to specify the "GOT" part unless necessary. E.g. `EXPECTED_DECODED_ACCOUNT`.
 *     - `_CANNOT_`: Some operation cannot be performed or some input cannot be used due to some condition. E.g. `CANNOT_DECODE_EMPTY_BYTE_ARRAY` or `PDA_CANNOT_END_WITH_PDA_MARKER`.
 *     - `_MUST_BE_`: Some condition must be true. E.g. `NONCE_TRANSACTION_FIRST_INSTRUCTION_MUST_BE_ADVANCE_NONCE`.
 *     - `_FAILED_TO_`: Tried to perform some operation and failed. E.g. `FAILED_TO_DECODE_ACCOUNT`.
 *     - `_NOT_FOUND`: Some operation lead to not finding something. E.g. `ACCOUNT_NOT_FOUND`.
 *     - `_OUT_OF_RANGE`: Some value is out of range. E.g. `ENUM_DISCRIMINATOR_OUT_OF_RANGE`.
 *     - `_EXCEEDED`: Some limit was exceeded. E.g. `PDA_MAX_SEED_LENGTH_EXCEEDED`.
 *     - `_MISMATCH`: Some elements do not match. E.g. `ENCODER_DECODER_FIXED_SIZE_MISMATCH`.
 *     - `_MISSING`: Some required input is missing. E.g. `TRANSACTION_FEE_PAYER_MISSING`.
 *     - `_UNIMPLEMENTED`: Some required component is not available in the environment. E.g. `SUBTLE_CRYPTO_VERIFY_FUNCTION_UNIMPLEMENTED`.
 */
export const SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED = 5 as const;
export const SOLANA_ERROR__INVALID_NONCE = 6 as const;
export const SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND = 7 as const;
export const SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE = 48 as const;
export const SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH = 49 as const;
export const SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE = 50 as const;
export const SOLANA_ERROR__MALFORMED_BIGINT_STRING = 51 as const;
export const SOLANA_ERROR__MALFORMED_NUMBER_STRING = 52 as const;
export const SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE = 53 as const;

// Addresses-related errors.
// Reserve error codes in the range [2800000-2800999].
export const SOLANA_ERROR__ADDRESSES_INVALID_BYTE_LENGTH = 2800000 as const;
export const SOLANA_ERROR__ADDRESSES_STRING_LENGTH_OUT_OF_RANGE = 2800001 as const;
export const SOLANA_ERROR__ADDRESSES_INVALID_BASE58_ENCODED_ADDRESS = 2800002 as const;
export const SOLANA_ERROR__ADDRESSES_INVALID_ED25519_PUBLIC_KEY = 2800003 as const;
export const SOLANA_ERROR__ADDRESSES_MALFORMED_PDA = 2800004 as const;
export const SOLANA_ERROR__ADDRESSES_PDA_BUMP_SEED_OUT_OF_RANGE = 2800005 as const;
export const SOLANA_ERROR__ADDRESSES_MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED = 2800006 as const;
export const SOLANA_ERROR__ADDRESSES_MAX_PDA_SEED_LENGTH_EXCEEDED = 2800007 as const;
export const SOLANA_ERROR__ADDRESSES_INVALID_SEEDS_POINT_ON_CURVE = 2800008 as const;
export const SOLANA_ERROR__ADDRESSES_FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED = 2800009 as const;
export const SOLANA_ERROR__ADDRESSES_PDA_ENDS_WITH_PDA_MARKER = 2800010 as const;

// Account-related errors.
// Reserve error codes in the range [3230000-3230999].
export const SOLANA_ERROR__ACCOUNTS_ACCOUNT_NOT_FOUND = 3230001 as const;
export const SOLANA_ERROR__ACCOUNTS_ONE_OR_MORE_ACCOUNTS_NOT_FOUND = 32300002 as const;
export const SOLANA_ERROR__ACCOUNTS_FAILED_TO_DECODE_ACCOUNT = 3230003 as const;
export const SOLANA_ERROR__ACCOUNTS_EXPECTED_DECODED_ACCOUNT = 3230004 as const;
export const SOLANA_ERROR__ACCOUNTS_EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED = 3230005 as const;

// Subtle-Crypto-related errors.
// Reserve error codes in the range [3610000-3610999].
export const SOLANA_ERROR__SUBTLE_CRYPTO_MISSING = 3610000 as const;
export const SOLANA_ERROR__SUBTLE_CRYPTO_DIGEST_MISSING = 3610001 as const;
export const SOLANA_ERROR__SUBTLE_CRYPTO_ED25519_ALGORITHM_MISSING = 3610002 as const;
export const SOLANA_ERROR__SUBTLE_CRYPTO_EXPORT_FUNCTION_MISSING = 3610003 as const;
export const SOLANA_ERROR__SUBTLE_CRYPTO_GENERATE_FUNCTION_MISSING = 3610004 as const;
export const SOLANA_ERROR__SUBTLE_CRYPTO_SIGN_FUNCTION_MISSING = 3610005 as const;
export const SOLANA_ERROR__SUBTLE_CRYPTO_VERIFY_FUNCTION_MISSING = 3610006 as const;

// Key-related errors.
// Reserve error codes in the range [3704000-3704999].
export const SOLANA_ERROR__KEYS_INVALID_KEY_PAIR_BYTE_LENGTH = 3704000 as const;
export const SOLANA_ERROR__KEYS_INVALID_PRIVATE_KEY_BYTE_LENGTH = 3704001 as const;
export const SOLANA_ERROR__KEYS_INVALID_SIGNATURE_BYTE_LENGTH = 3704002 as const;
export const SOLANA_ERROR__KEYS_SIGNATURE_STRING_LENGTH_OUT_OF_RANGE = 3704003 as const;

// Instruction-related errors.
// Reserve error codes in the range [4128000-4128999].
export const SOLANA_ERROR__INSTRUCTION_EXPECTED_TO_HAVE_ACCOUNTS = 4128000 as const;
export const SOLANA_ERROR__INSTRUCTION_EXPECTED_TO_HAVE_DATA = 4128001 as const;
export const SOLANA_ERROR__INSTRUCTION_PROGRAM_ID_MISMATCH = 4128002 as const;

// Instruction errors.
// Reserve error codes starting with [4615000-4615999] for the Rust enum `InstructionError`.
// Error names here are dictated by the RPC (see ./instruction-error.ts).
export const SOLANA_ERROR__INSTRUCTION_ERROR_UNKNOWN = 4615000 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_GENERIC_ERROR = 4615001 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ARGUMENT = 4615002 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_INSTRUCTION_DATA = 4615003 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ACCOUNT_DATA = 4615004 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_DATA_TOO_SMALL = 4615005 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_INSUFFICIENT_FUNDS = 4615006 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_INCORRECT_PROGRAM_ID = 4615007 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_MISSING_REQUIRED_SIGNATURE = 4615008 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_ALREADY_INITIALIZED = 4615009 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_UNINITIALIZED_ACCOUNT = 4615010 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_UNBALANCED_INSTRUCTION = 4615011 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_MODIFIED_PROGRAM_ID = 4615012 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_EXTERNAL_ACCOUNT_LAMPORT_SPEND = 4615013 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_EXTERNAL_ACCOUNT_DATA_MODIFIED = 4615014 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_READONLY_LAMPORT_CHANGE = 4615015 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_READONLY_DATA_MODIFIED = 4615016 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_DUPLICATE_ACCOUNT_INDEX = 4615017 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_MODIFIED = 4615018 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_RENT_EPOCH_MODIFIED = 4615019 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_NOT_ENOUGH_ACCOUNT_KEYS = 4615020 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_DATA_SIZE_CHANGED = 4615021 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_NOT_EXECUTABLE = 4615022 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_BORROW_FAILED = 4615023 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_BORROW_OUTSTANDING = 4615024 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_DUPLICATE_ACCOUNT_OUT_OF_SYNC = 4615025 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_CUSTOM = 4615026 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ERROR = 4615027 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_DATA_MODIFIED = 4615028 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_LAMPORT_CHANGE = 4615029 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT = 4615030 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_UNSUPPORTED_PROGRAM_ID = 4615031 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_CALL_DEPTH = 4615032 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_MISSING_ACCOUNT = 4615033 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_REENTRANCY_NOT_ALLOWED = 4615034 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_MAX_SEED_LENGTH_EXCEEDED = 4615035 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_SEEDS = 4615036 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_REALLOC = 4615037 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_COMPUTATIONAL_BUDGET_EXCEEDED = 4615038 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_PRIVILEGE_ESCALATION = 4615039 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_ENVIRONMENT_SETUP_FAILURE = 4615040 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_FAILED_TO_COMPLETE = 4615041 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_FAILED_TO_COMPILE = 4615042 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_IMMUTABLE = 4615043 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_INCORRECT_AUTHORITY = 4615044 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_BORSH_IO_ERROR = 4615045 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_NOT_RENT_EXEMPT = 4615046 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ACCOUNT_OWNER = 4615047 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_ARITHMETIC_OVERFLOW = 4615048 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_UNSUPPORTED_SYSVAR = 4615049 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_ILLEGAL_OWNER = 4615050 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED = 4615051 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_MAX_ACCOUNTS_EXCEEDED = 4615052 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED = 4615053 as const;
export const SOLANA_ERROR__INSTRUCTION_ERROR_BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS = 4615054 as const;

// Signer-related errors.
// Reserve error codes in the range [5508000-5508999].
export const SOLANA_ERROR__SIGNER_ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS = 5508000 as const;
export const SOLANA_ERROR__SIGNER_EXPECTED_KEY_PAIR_SIGNER = 5508001 as const;
export const SOLANA_ERROR__SIGNER_EXPECTED_MESSAGE_SIGNER = 5508002 as const;
export const SOLANA_ERROR__SIGNER_EXPECTED_MESSAGE_MODIFYING_SIGNER = 5508003 as const;
export const SOLANA_ERROR__SIGNER_EXPECTED_MESSAGE_PARTIAL_SIGNER = 5508004 as const;
export const SOLANA_ERROR__SIGNER_EXPECTED_TRANSACTION_SIGNER = 5508005 as const;
export const SOLANA_ERROR__SIGNER_EXPECTED_TRANSACTION_MODIFYING_SIGNER = 5508006 as const;
export const SOLANA_ERROR__SIGNER_EXPECTED_TRANSACTION_PARTIAL_SIGNER = 5508007 as const;
export const SOLANA_ERROR__SIGNER_EXPECTED_TRANSACTION_SENDING_SIGNER = 5508008 as const;
export const SOLANA_ERROR__SIGNER_TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS = 5508009 as const;
export const SOLANA_ERROR__SIGNER_TRANSACTION_SENDING_SIGNER_MISSING = 5508010 as const;

// Transaction-related errors.
// Reserve error codes in the range [5663000-5663999].
export const SOLANA_ERROR__TRANSACTION_INVOKED_PROGRAMS_CANNOT_PAY_FEES = 5663001 as const;
export const SOLANA_ERROR__TRANSACTION_INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE = 5663002 as const;
export const SOLANA_ERROR__TRANSACTION_EXPECTED_BLOCKHASH_LIFETIME = 5663003 as const;
export const SOLANA_ERROR__TRANSACTION_EXPECTED_NONCE_LIFETIME = 5663004 as const;
export const SOLANA_ERROR__TRANSACTION_VERSION_NUMBER_OUT_OF_RANGE = 5663005 as const;
export const SOLANA_ERROR__TRANSACTION_FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING = 5663006 as const;
export const SOLANA_ERROR__TRANSACTION_FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE = 5663007 as const;
export const SOLANA_ERROR__TRANSACTION_FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND = 5663008 as const;
export const SOLANA_ERROR__TRANSACTION_FAILED_TO_DECOMPILE_FEE_PAYER_MISSING = 5663009 as const;
export const SOLANA_ERROR__TRANSACTION_MISSING_SIGNATURES = 5663010 as const;
export const SOLANA_ERROR__TRANSACTION_SIGNATURE_NOT_COMPUTABLE = 5663011 as const;
export const SOLANA_ERROR__TRANSACTION_MISSING_ADDRESS = 5663012 as const;
export const SOLANA_ERROR__TRANSACTION_MISSING_FEE_PAYER = 5663013 as const;
export const SOLANA_ERROR__TRANSACTION_INVALID_NONCE_TRANSACTION_NO_INSTRUCTIONS = 5663014 as const;
export const SOLANA_ERROR__TRANSACTION_INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_NOT_ADVANCE_NONCE = 5663015 as const;

// Transaction errors.
// Reserve error codes starting with [7050000-7050999] for the Rust enum `TransactionError`.
// Error names here are dictated by the RPC (see ./transaction-error.ts).
export const SOLANA_ERROR__TRANSACTION_ERROR_UNKNOWN = 7050000 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_IN_USE = 7050001 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_LOADED_TWICE = 7050002 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_NOT_FOUND = 7050003 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_PROGRAM_ACCOUNT_NOT_FOUND = 7050004 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INSUFFICIENT_FUNDS_FOR_FEE = 7050005 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ACCOUNT_FOR_FEE = 7050006 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_ALREADY_PROCESSED = 7050007 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_BLOCKHASH_NOT_FOUND = 7050008 as const;
// `InstructionError` intentionally omitted.
export const SOLANA_ERROR__TRANSACTION_ERROR_CALL_CHAIN_TOO_DEEP = 7050009 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_MISSING_SIGNATURE_FOR_FEE = 7050010 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ACCOUNT_INDEX = 7050011 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_SIGNATURE_FAILURE = 7050012 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INVALID_PROGRAM_FOR_EXECUTION = 7050013 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_SANITIZE_FAILURE = 7050014 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_CLUSTER_MAINTENANCE = 7050015 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_BORROW_OUTSTANDING = 7050016 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_BLOCK_COST_LIMIT = 7050017 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_UNSUPPORTED_VERSION = 7050018 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INVALID_WRITABLE_ACCOUNT = 7050019 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT = 7050020 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT = 7050021 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_TOO_MANY_ACCOUNT_LOCKS = 7050022 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_ADDRESS_LOOKUP_TABLE_NOT_FOUND = 7050023 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_OWNER = 7050024 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_DATA = 7050025 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_INDEX = 7050026 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INVALID_RENT_PAYING_ACCOUNT = 7050027 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_VOTE_COST_LIMIT = 7050028 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT = 7050029 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_DUPLICATE_INSTRUCTION = 7050030 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INSUFFICIENT_FUNDS_FOR_RENT = 7050031 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED = 7050032 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT = 7050033 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_RESANITIZATION_NEEDED = 7050034 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED = 7050035 as const;
export const SOLANA_ERROR__TRANSACTION_ERROR_UNBALANCED_TRANSACTION = 7050036 as const;

// Codec-related errors.
// Reserve error codes in the range [8078000-8078999].
export const SOLANA_ERROR__CODECS_CANNOT_DECODE_EMPTY_BYTE_ARRAY = 8078000 as const;
export const SOLANA_ERROR__CODECS_WRONG_NUMBER_OF_BYTES = 8078001 as const;
export const SOLANA_ERROR__CODECS_EXPECTED_FIXED_LENGTH_GOT_VARIABLE_LENGTH = 8078002 as const;
export const SOLANA_ERROR__CODECS_EXPECTED_VARIABLE_LENGTH_GOT_FIXED_LENGTH = 8078003 as const;
export const SOLANA_ERROR__CODECS_ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH = 8078004 as const;
export const SOLANA_ERROR__CODECS_FIXED_SIZE_ENCODER_DECODER_SIZE_MISMATCH = 8078005 as const;
export const SOLANA_ERROR__CODECS_VARIABLE_SIZE_ENCODER_DECODER_MAX_SIZE_MISMATCH = 8078006 as const;
export const SOLANA_ERROR__CODECS_WRONG_NUMBER_OF_ITEMS = 8078007 as const;
export const SOLANA_ERROR__CODECS_ENUM_DISCRIMINATOR_OUT_OF_RANGE = 8078008 as const;
export const SOLANA_ERROR__CODECS_INVALID_DATA_ENUM_VARIANT = 8078009 as const;
export const SOLANA_ERROR__CODECS_INVALID_SCALAR_ENUM_VARIANT = 8078010 as const;
export const SOLANA_ERROR__CODECS_NUMBER_OUT_OF_RANGE = 8078011 as const;
export const SOLANA_ERROR__CODECS_INVALID_STRING_FOR_BASE = 8078012 as const;

// RPC-related errors.
// Reserve error codes in the range [8100000-8100999].
export const SOLANA_ERROR__RPC_INTEGER_OVERFLOW = 8100000 as const;
export const SOLANA_ERROR__RPC_TRANSPORT_HEADER_FORBIDDEN = 8100001 as const;
export const SOLANA_ERROR__RPC_TRANSPORT_HTTP_ERROR = 8100002 as const;

// RPC-Subscriptions-related errors.
// Reserve error codes in the range [8190000-8190999].
export const SOLANA_ERROR__RPC_SUBSCRIPTIONS_CANNOT_CREATE_SUBSCRIPTION_REQUEST = 8190000 as const;
export const SOLANA_ERROR__RPC_SUBSCRIPTIONS_EXPECTED_SERVER_SUBSCRIPTION_ID = 8190001 as const;
export const SOLANA_ERROR__RPC_SUBSCRIPTIONS_TRANSPORT_CLOSED_BEFORE_MESSAGE_BUFFERED = 8190002 as const;
export const SOLANA_ERROR__RPC_SUBSCRIPTIONS_TRANSPORT_CONNECTION_CLOSED = 8190003 as const;
export const SOLANA_ERROR__RPC_SUBSCRIPTIONS_TRANSPORT_FAILED_TO_CONNECT = 8190004 as const;

// Invariant violation errors.
// Reserve error codes in the range [9900000-9900999].
// These errors should only be thrown when there is a bug with the
// library itself and should, in theory, never reach the end user.
export const SOLANA_ERROR__INVARIANT_VIOLATION_WEBSOCKET_MESSAGE_ITERATOR_STATE_MISSING = 9900000 as const;
export const SOLANA_ERROR__INVARIANT_VIOLATION_WEBSOCKET_MESSAGE_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE =
    9900001 as const;
export const SOLANA_ERROR__INVARIANT_VIOLATION_CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING = 9900002 as const;
export const SOLANA_ERROR__INVARIANT_VIOLATION_SWITCH_MUST_BE_EXHAUSTIVE = 9900003 as const;

/**
 * A union of every Solana error code
 *
 * You might be wondering why this is not a TypeScript enum or const enum.
 *
 * One of the goals of this library is to enable people to use some or none of it without having to
 * bundle all of it.
 *
 * If we made the set of error codes an enum then anyone who imported it (even if to only use a
 * single error code) would be forced to bundle every code and its label.
 *
 * Const enums appear to solve this problem by letting the compiler inline only the codes that are
 * actually used. Unfortunately exporting ambient (const) enums from a library like `@solana/errors`
 * is not safe, for a variety of reasons covered here: https://stackoverflow.com/a/28818850
 */
export type SolanaErrorCode =
    | typeof SOLANA_ERROR__TRANSACTION_MISSING_SIGNATURES
    | typeof SOLANA_ERROR__TRANSACTION_SIGNATURE_NOT_COMPUTABLE
    | typeof SOLANA_ERROR__RPC_INTEGER_OVERFLOW
    | typeof SOLANA_ERROR__KEYS_INVALID_KEY_PAIR_BYTE_LENGTH
    | typeof SOLANA_ERROR__BLOCK_HEIGHT_EXCEEDED
    | typeof SOLANA_ERROR__INVALID_NONCE
    | typeof SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND
    | typeof SOLANA_ERROR__ACCOUNTS_ACCOUNT_NOT_FOUND
    | typeof SOLANA_ERROR__ACCOUNTS_ONE_OR_MORE_ACCOUNTS_NOT_FOUND
    | typeof SOLANA_ERROR__ACCOUNTS_FAILED_TO_DECODE_ACCOUNT
    | typeof SOLANA_ERROR__ACCOUNTS_EXPECTED_DECODED_ACCOUNT
    | typeof SOLANA_ERROR__ACCOUNTS_EXPECTED_ALL_ACCOUNTS_TO_BE_DECODED
    | typeof SOLANA_ERROR__ADDRESSES_STRING_LENGTH_OUT_OF_RANGE
    | typeof SOLANA_ERROR__ADDRESSES_INVALID_BYTE_LENGTH
    | typeof SOLANA_ERROR__ADDRESSES_INVALID_BASE58_ENCODED_ADDRESS
    | typeof SOLANA_ERROR__ADDRESSES_INVALID_ED25519_PUBLIC_KEY
    | typeof SOLANA_ERROR__ADDRESSES_MALFORMED_PDA
    | typeof SOLANA_ERROR__ADDRESSES_PDA_BUMP_SEED_OUT_OF_RANGE
    | typeof SOLANA_ERROR__ADDRESSES_MAX_NUMBER_OF_PDA_SEEDS_EXCEEDED
    | typeof SOLANA_ERROR__ADDRESSES_MAX_PDA_SEED_LENGTH_EXCEEDED
    | typeof SOLANA_ERROR__ADDRESSES_INVALID_SEEDS_POINT_ON_CURVE
    | typeof SOLANA_ERROR__ADDRESSES_FAILED_TO_FIND_VIABLE_PDA_BUMP_SEED
    | typeof SOLANA_ERROR__ADDRESSES_PDA_ENDS_WITH_PDA_MARKER
    | typeof SOLANA_ERROR__BLOCKHASH_STRING_LENGTH_OUT_OF_RANGE
    | typeof SOLANA_ERROR__INVALID_BLOCKHASH_BYTE_LENGTH
    | typeof SOLANA_ERROR__MALFORMED_BIGINT_STRING
    | typeof SOLANA_ERROR__LAMPORTS_OUT_OF_RANGE
    | typeof SOLANA_ERROR__MALFORMED_NUMBER_STRING
    | typeof SOLANA_ERROR__TIMESTAMP_OUT_OF_RANGE
    | typeof SOLANA_ERROR__RPC_TRANSPORT_HEADER_FORBIDDEN
    | typeof SOLANA_ERROR__RPC_TRANSPORT_HTTP_ERROR
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO_MISSING
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO_DIGEST_MISSING
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO_ED25519_ALGORITHM_MISSING
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO_EXPORT_FUNCTION_MISSING
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO_GENERATE_FUNCTION_MISSING
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO_SIGN_FUNCTION_MISSING
    | typeof SOLANA_ERROR__SUBTLE_CRYPTO_VERIFY_FUNCTION_MISSING
    | typeof SOLANA_ERROR__CODECS_CANNOT_DECODE_EMPTY_BYTE_ARRAY
    | typeof SOLANA_ERROR__CODECS_WRONG_NUMBER_OF_BYTES
    | typeof SOLANA_ERROR__CODECS_EXPECTED_FIXED_LENGTH_GOT_VARIABLE_LENGTH
    | typeof SOLANA_ERROR__CODECS_EXPECTED_VARIABLE_LENGTH_GOT_FIXED_LENGTH
    | typeof SOLANA_ERROR__CODECS_ENCODER_DECODER_SIZE_COMPATIBILITY_MISMATCH
    | typeof SOLANA_ERROR__CODECS_FIXED_SIZE_ENCODER_DECODER_SIZE_MISMATCH
    | typeof SOLANA_ERROR__CODECS_VARIABLE_SIZE_ENCODER_DECODER_MAX_SIZE_MISMATCH
    | typeof SOLANA_ERROR__CODECS_WRONG_NUMBER_OF_ITEMS
    | typeof SOLANA_ERROR__CODECS_ENUM_DISCRIMINATOR_OUT_OF_RANGE
    | typeof SOLANA_ERROR__CODECS_INVALID_DATA_ENUM_VARIANT
    | typeof SOLANA_ERROR__CODECS_INVALID_SCALAR_ENUM_VARIANT
    | typeof SOLANA_ERROR__CODECS_INVALID_STRING_FOR_BASE
    | typeof SOLANA_ERROR__CODECS_NUMBER_OUT_OF_RANGE
    | typeof SOLANA_ERROR__SIGNER_ADDRESS_CANNOT_HAVE_MULTIPLE_SIGNERS
    | typeof SOLANA_ERROR__SIGNER_EXPECTED_KEY_PAIR_SIGNER
    | typeof SOLANA_ERROR__SIGNER_EXPECTED_MESSAGE_SIGNER
    | typeof SOLANA_ERROR__SIGNER_EXPECTED_MESSAGE_MODIFYING_SIGNER
    | typeof SOLANA_ERROR__SIGNER_EXPECTED_MESSAGE_PARTIAL_SIGNER
    | typeof SOLANA_ERROR__SIGNER_EXPECTED_TRANSACTION_SIGNER
    | typeof SOLANA_ERROR__SIGNER_EXPECTED_TRANSACTION_MODIFYING_SIGNER
    | typeof SOLANA_ERROR__SIGNER_EXPECTED_TRANSACTION_PARTIAL_SIGNER
    | typeof SOLANA_ERROR__SIGNER_EXPECTED_TRANSACTION_SENDING_SIGNER
    | typeof SOLANA_ERROR__SIGNER_TRANSACTION_CANNOT_HAVE_MULTIPLE_SENDING_SIGNERS
    | typeof SOLANA_ERROR__SIGNER_TRANSACTION_SENDING_SIGNER_MISSING
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_UNKNOWN
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_GENERIC_ERROR
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ARGUMENT
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_INSTRUCTION_DATA
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ACCOUNT_DATA
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_DATA_TOO_SMALL
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_INSUFFICIENT_FUNDS
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_INCORRECT_PROGRAM_ID
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_MISSING_REQUIRED_SIGNATURE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_ALREADY_INITIALIZED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_UNINITIALIZED_ACCOUNT
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_UNBALANCED_INSTRUCTION
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_MODIFIED_PROGRAM_ID
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_EXTERNAL_ACCOUNT_LAMPORT_SPEND
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_EXTERNAL_ACCOUNT_DATA_MODIFIED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_READONLY_LAMPORT_CHANGE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_READONLY_DATA_MODIFIED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_DUPLICATE_ACCOUNT_INDEX
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_MODIFIED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_RENT_EPOCH_MODIFIED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_NOT_ENOUGH_ACCOUNT_KEYS
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_DATA_SIZE_CHANGED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_NOT_EXECUTABLE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_BORROW_FAILED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_BORROW_OUTSTANDING
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_DUPLICATE_ACCOUNT_OUT_OF_SYNC
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_CUSTOM
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ERROR
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_DATA_MODIFIED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_LAMPORT_CHANGE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_EXECUTABLE_ACCOUNT_NOT_RENT_EXEMPT
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_UNSUPPORTED_PROGRAM_ID
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_CALL_DEPTH
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_MISSING_ACCOUNT
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_REENTRANCY_NOT_ALLOWED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_MAX_SEED_LENGTH_EXCEEDED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_SEEDS
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_REALLOC
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_COMPUTATIONAL_BUDGET_EXCEEDED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_PRIVILEGE_ESCALATION
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_ENVIRONMENT_SETUP_FAILURE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_FAILED_TO_COMPLETE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_PROGRAM_FAILED_TO_COMPILE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_IMMUTABLE
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_INCORRECT_AUTHORITY
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_BORSH_IO_ERROR
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_ACCOUNT_NOT_RENT_EXEMPT
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_INVALID_ACCOUNT_OWNER
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_ARITHMETIC_OVERFLOW
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_UNSUPPORTED_SYSVAR
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_ILLEGAL_OWNER
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_MAX_ACCOUNTS_DATA_ALLOCATIONS_EXCEEDED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_MAX_ACCOUNTS_EXCEEDED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_MAX_INSTRUCTION_TRACE_LENGTH_EXCEEDED
    | typeof SOLANA_ERROR__INSTRUCTION_ERROR_BUILTIN_PROGRAMS_MUST_CONSUME_COMPUTE_UNITS
    | typeof SOLANA_ERROR__INVARIANT_VIOLATION_WEBSOCKET_MESSAGE_ITERATOR_STATE_MISSING
    | typeof SOLANA_ERROR__INVARIANT_VIOLATION_WEBSOCKET_MESSAGE_ITERATOR_MUST_NOT_POLL_BEFORE_RESOLVING_EXISTING_MESSAGE_PROMISE
    | typeof SOLANA_ERROR__INVARIANT_VIOLATION_CACHED_ABORTABLE_ITERABLE_CACHE_ENTRY_MISSING
    | typeof SOLANA_ERROR__INVARIANT_VIOLATION_SWITCH_MUST_BE_EXHAUSTIVE
    | typeof SOLANA_ERROR__KEYS_INVALID_PRIVATE_KEY_BYTE_LENGTH
    | typeof SOLANA_ERROR__KEYS_INVALID_SIGNATURE_BYTE_LENGTH
    | typeof SOLANA_ERROR__KEYS_SIGNATURE_STRING_LENGTH_OUT_OF_RANGE
    | typeof SOLANA_ERROR__RPC_SUBSCRIPTIONS_CANNOT_CREATE_SUBSCRIPTION_REQUEST
    | typeof SOLANA_ERROR__RPC_SUBSCRIPTIONS_EXPECTED_SERVER_SUBSCRIPTION_ID
    | typeof SOLANA_ERROR__RPC_SUBSCRIPTIONS_TRANSPORT_CLOSED_BEFORE_MESSAGE_BUFFERED
    | typeof SOLANA_ERROR__RPC_SUBSCRIPTIONS_TRANSPORT_CONNECTION_CLOSED
    | typeof SOLANA_ERROR__RPC_SUBSCRIPTIONS_TRANSPORT_FAILED_TO_CONNECT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_UNKNOWN
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_IN_USE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_LOADED_TWICE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_NOT_FOUND
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_PROGRAM_ACCOUNT_NOT_FOUND
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INSUFFICIENT_FUNDS_FOR_FEE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ACCOUNT_FOR_FEE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_ALREADY_PROCESSED
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_BLOCKHASH_NOT_FOUND
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_CALL_CHAIN_TOO_DEEP
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_MISSING_SIGNATURE_FOR_FEE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ACCOUNT_INDEX
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_SIGNATURE_FAILURE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INVALID_PROGRAM_FOR_EXECUTION
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_SANITIZE_FAILURE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_CLUSTER_MAINTENANCE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_ACCOUNT_BORROW_OUTSTANDING
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_BLOCK_COST_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_UNSUPPORTED_VERSION
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INVALID_WRITABLE_ACCOUNT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_ACCOUNT_COST_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_ACCOUNT_DATA_BLOCK_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_TOO_MANY_ACCOUNT_LOCKS
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_ADDRESS_LOOKUP_TABLE_NOT_FOUND
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_OWNER
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_DATA
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INVALID_ADDRESS_LOOKUP_TABLE_INDEX
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INVALID_RENT_PAYING_ACCOUNT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_MAX_VOTE_COST_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_WOULD_EXCEED_ACCOUNT_DATA_TOTAL_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_DUPLICATE_INSTRUCTION
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INSUFFICIENT_FUNDS_FOR_RENT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_MAX_LOADED_ACCOUNTS_DATA_SIZE_EXCEEDED
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_INVALID_LOADED_ACCOUNTS_DATA_SIZE_LIMIT
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_RESANITIZATION_NEEDED
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_PROGRAM_EXECUTION_TEMPORARILY_RESTRICTED
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_UNBALANCED_TRANSACTION
    | typeof SOLANA_ERROR__TRANSACTION_EXPECTED_BLOCKHASH_LIFETIME
    | typeof SOLANA_ERROR__TRANSACTION_EXPECTED_NONCE_LIFETIME
    | typeof SOLANA_ERROR__TRANSACTION_FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_CONTENTS_MISSING
    | typeof SOLANA_ERROR__TRANSACTION_FAILED_TO_DECOMPILE_ADDRESS_LOOKUP_TABLE_INDEX_OUT_OF_RANGE
    | typeof SOLANA_ERROR__TRANSACTION_FAILED_TO_DECOMPILE_FEE_PAYER_MISSING
    | typeof SOLANA_ERROR__TRANSACTION_FAILED_TO_DECOMPILE_INSTRUCTION_PROGRAM_ADDRESS_NOT_FOUND
    | typeof SOLANA_ERROR__TRANSACTION_INVALID_NONCE_TRANSACTION_FIRST_INSTRUCTION_NOT_ADVANCE_NONCE
    | typeof SOLANA_ERROR__TRANSACTION_INVALID_NONCE_TRANSACTION_NO_INSTRUCTIONS
    | typeof SOLANA_ERROR__TRANSACTION_INVOKED_PROGRAMS_CANNOT_PAY_FEES
    | typeof SOLANA_ERROR__TRANSACTION_INVOKED_PROGRAMS_MUST_NOT_BE_WRITABLE
    | typeof SOLANA_ERROR__TRANSACTION_MISSING_ADDRESS
    | typeof SOLANA_ERROR__TRANSACTION_MISSING_FEE_PAYER
    | typeof SOLANA_ERROR__TRANSACTION_VERSION_NUMBER_OUT_OF_RANGE
    | typeof SOLANA_ERROR__TRANSACTION_ERROR_UNBALANCED_TRANSACTION
    | typeof SOLANA_ERROR__NONCE_ACCOUNT_NOT_FOUND
    | typeof SOLANA_ERROR__INSTRUCTION_EXPECTED_TO_HAVE_ACCOUNTS
    | typeof SOLANA_ERROR__INSTRUCTION_EXPECTED_TO_HAVE_DATA
    | typeof SOLANA_ERROR__INSTRUCTION_PROGRAM_ID_MISMATCH;
