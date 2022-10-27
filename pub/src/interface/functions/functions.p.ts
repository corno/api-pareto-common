
import * as pt from "pareto-core-types"

import * as api from "../../interface"


export type FCreateParser = <PStreamToken, PResult>(
    $i: ($: PResult) => void,
    $a: pt.ProcessAsyncValue,
) => api.IStreamConsumer<PStreamToken>

export type FConnectToStream<PStreamToken> = (
    $i: api.IStreamConsumer<PStreamToken>
) => void


/**
 * aggregates a stream of T
 * when the parser decides the stream is done, it will send the result
 * if the parser sends the result more than once, the system will panic
 */
export type FAggregateStream<PStreamToken, PResult> = (
    $d: {
        connectToStream: FConnectToStream<PStreamToken>,
        createParser: FCreateParser,
    }
) => pt.AsyncValue<PResult>