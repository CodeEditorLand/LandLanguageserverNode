/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
/// <reference path="../../typings/thenable.d.ts" preserve="true"/>

import {
	AbstractCancellationTokenSource,
	CancellationToken,
	CancellationTokenSource,
} from "./cancellation";
import {
	CancellationId,
	CancellationReceiverStrategy,
	CancellationSenderStrategy,
	CancellationStrategy,
	ConnectionError,
	ConnectionErrors,
	ConnectionOptions,
	ConnectionStrategy,
	createMessageConnection,
	GenericNotificationHandler,
	GenericRequestHandler,
	HandlerResult,
	IdCancellationReceiverStrategy,
	Logger,
	LogTraceNotification,
	LogTraceParams,
	MessageConnection,
	MessageStrategy,
	NotificationHandler,
	NotificationHandler0,
	NotificationHandler1,
	NotificationHandler2,
	NotificationHandler3,
	NotificationHandler4,
	NotificationHandler5,
	NotificationHandler6,
	NotificationHandler7,
	NotificationHandler8,
	NotificationHandler9,
	NullLogger,
	ProgressToken,
	ProgressType,
	RequestCancellationReceiverStrategy,
	RequestHandler,
	RequestHandler0,
	RequestHandler1,
	RequestHandler2,
	RequestHandler3,
	RequestHandler4,
	RequestHandler5,
	RequestHandler6,
	RequestHandler7,
	RequestHandler8,
	RequestHandler9,
	SetTraceNotification,
	SetTraceParams,
	StarNotificationHandler,
	StarRequestHandler,
	Trace,
	TraceFormat,
	TraceOptions,
	Tracer,
	TraceValue,
	TraceValues,
} from "./connection";
import { Disposable } from "./disposable";
import {
	ContentDecoder,
	ContentEncoder,
	ContentTypeDecoder,
	ContentTypeDecoderOptions,
	ContentTypeEncoder,
	ContentTypeEncoderOptions,
} from "./encoding";
import { Emitter, Event } from "./events";
import { LinkedMap, LRUCache, Touch } from "./linkedMap";
import { AbstractMessageBuffer } from "./messageBuffer";
import {
	AbstractMessageReader,
	DataCallback,
	MessageReader,
	MessageReaderOptions,
	PartialMessageInfo,
	ReadableStreamMessageReader,
} from "./messageReader";
import {
	_EM,
	ErrorCodes,
	Message,
	MessageSignature,
	NotificationMessage,
	NotificationType,
	NotificationType0,
	NotificationType1,
	NotificationType2,
	NotificationType3,
	NotificationType4,
	NotificationType5,
	NotificationType6,
	NotificationType7,
	NotificationType8,
	NotificationType9,
	ParameterStructures,
	RequestMessage,
	RequestType,
	RequestType0,
	RequestType1,
	RequestType2,
	RequestType3,
	RequestType4,
	RequestType5,
	RequestType6,
	RequestType7,
	RequestType8,
	RequestType9,
	ResponseError,
	ResponseMessage,
} from "./messages";
import {
	AbstractMessageWriter,
	MessageWriter,
	MessageWriterOptions,
	WriteableStreamMessageWriter,
} from "./messageWriter";
import RAL from "./ral";
import {
	SharedArrayReceiverStrategy,
	SharedArraySenderStrategy,
} from "./sharedArrayCancellation";

export {
	RAL,
	// Export from messages
	Message,
	MessageSignature,
	RequestMessage,
	RequestType,
	RequestType0,
	RequestType1,
	RequestType2,
	RequestType3,
	RequestType4,
	RequestType5,
	RequestType6,
	RequestType7,
	RequestType8,
	RequestType9,
	ResponseError,
	ErrorCodes,
	NotificationMessage,
	NotificationType,
	NotificationType0,
	NotificationType1,
	NotificationType2,
	NotificationType3,
	NotificationType4,
	NotificationType5,
	NotificationType6,
	NotificationType7,
	NotificationType8,
	NotificationType9,
	ResponseMessage,
	ParameterStructures,
	_EM,
	// Export from linkedMap
	LinkedMap,
	Touch,
	LRUCache,
	// Export from disposable
	Disposable,
	// Export from events
	Event,
	Emitter,
	// Export from cancellation
	AbstractCancellationTokenSource,
	CancellationTokenSource,
	CancellationToken,
	// Export form sharedArrayCancellation
	SharedArraySenderStrategy,
	SharedArrayReceiverStrategy,
	// Export from message reader
	MessageReader,
	AbstractMessageReader,
	ReadableStreamMessageReader,
	DataCallback,
	MessageReaderOptions,
	PartialMessageInfo,
	// Export from message write
	MessageWriter,
	AbstractMessageWriter,
	WriteableStreamMessageWriter,
	MessageWriterOptions,
	// Export from abstract message buffer
	AbstractMessageBuffer,
	// Export from encodings
	ContentTypeEncoderOptions,
	ContentEncoder,
	ContentTypeEncoder,
	ContentTypeDecoderOptions,
	ContentDecoder,
	ContentTypeDecoder,
	// Export from connection
	Logger,
	ConnectionStrategy,
	ConnectionOptions,
	MessageConnection,
	NullLogger,
	createMessageConnection,
	ProgressToken,
	ProgressType,
	HandlerResult,
	StarRequestHandler,
	GenericRequestHandler,
	RequestHandler0,
	RequestHandler,
	RequestHandler1,
	RequestHandler2,
	RequestHandler3,
	RequestHandler4,
	RequestHandler5,
	RequestHandler6,
	RequestHandler7,
	RequestHandler8,
	RequestHandler9,
	StarNotificationHandler,
	GenericNotificationHandler,
	NotificationHandler0,
	NotificationHandler,
	NotificationHandler1,
	NotificationHandler2,
	NotificationHandler3,
	NotificationHandler4,
	NotificationHandler5,
	NotificationHandler6,
	NotificationHandler7,
	NotificationHandler8,
	NotificationHandler9,
	Trace,
	TraceValue,
	TraceValues,
	TraceFormat,
	TraceOptions,
	SetTraceParams,
	SetTraceNotification,
	LogTraceParams,
	LogTraceNotification,
	Tracer,
	ConnectionErrors,
	ConnectionError,
	CancellationId,
	CancellationReceiverStrategy,
	IdCancellationReceiverStrategy,
	RequestCancellationReceiverStrategy,
	CancellationSenderStrategy,
	CancellationStrategy,
	MessageStrategy,
};
