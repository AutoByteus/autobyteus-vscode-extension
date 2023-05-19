// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grpc_service_pb = require('./grpc_service_pb.js');

function serialize_automatedcodingworkflow_GetWorkflowConfigRequest(arg) {
  if (!(arg instanceof grpc_service_pb.GetWorkflowConfigRequest)) {
    throw new Error('Expected argument of type automatedcodingworkflow.GetWorkflowConfigRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_automatedcodingworkflow_GetWorkflowConfigRequest(buffer_arg) {
  return grpc_service_pb.GetWorkflowConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_automatedcodingworkflow_GetWorkflowConfigResponse(arg) {
  if (!(arg instanceof grpc_service_pb.GetWorkflowConfigResponse)) {
    throw new Error('Expected argument of type automatedcodingworkflow.GetWorkflowConfigResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_automatedcodingworkflow_GetWorkflowConfigResponse(buffer_arg) {
  return grpc_service_pb.GetWorkflowConfigResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_automatedcodingworkflow_SetWorkspacePathRequest(arg) {
  if (!(arg instanceof grpc_service_pb.SetWorkspacePathRequest)) {
    throw new Error('Expected argument of type automatedcodingworkflow.SetWorkspacePathRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_automatedcodingworkflow_SetWorkspacePathRequest(buffer_arg) {
  return grpc_service_pb.SetWorkspacePathRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_automatedcodingworkflow_SetWorkspacePathResponse(arg) {
  if (!(arg instanceof grpc_service_pb.SetWorkspacePathResponse)) {
    throw new Error('Expected argument of type automatedcodingworkflow.SetWorkspacePathResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_automatedcodingworkflow_SetWorkspacePathResponse(buffer_arg) {
  return grpc_service_pb.SetWorkspacePathResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_automatedcodingworkflow_StartWorkflowRequest(arg) {
  if (!(arg instanceof grpc_service_pb.StartWorkflowRequest)) {
    throw new Error('Expected argument of type automatedcodingworkflow.StartWorkflowRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_automatedcodingworkflow_StartWorkflowRequest(buffer_arg) {
  return grpc_service_pb.StartWorkflowRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_automatedcodingworkflow_StartWorkflowResponse(arg) {
  if (!(arg instanceof grpc_service_pb.StartWorkflowResponse)) {
    throw new Error('Expected argument of type automatedcodingworkflow.StartWorkflowResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_automatedcodingworkflow_StartWorkflowResponse(buffer_arg) {
  return grpc_service_pb.StartWorkflowResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AutomatedCodingWorkflowServiceService = exports.AutomatedCodingWorkflowServiceService = {
  startWorkflow: {
    path: '/automatedcodingworkflow.AutomatedCodingWorkflowService/StartWorkflow',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.StartWorkflowRequest,
    responseType: grpc_service_pb.StartWorkflowResponse,
    requestSerialize: serialize_automatedcodingworkflow_StartWorkflowRequest,
    requestDeserialize: deserialize_automatedcodingworkflow_StartWorkflowRequest,
    responseSerialize: serialize_automatedcodingworkflow_StartWorkflowResponse,
    responseDeserialize: deserialize_automatedcodingworkflow_StartWorkflowResponse,
  },
  getWorkflowConfig: {
    path: '/automatedcodingworkflow.AutomatedCodingWorkflowService/GetWorkflowConfig',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.GetWorkflowConfigRequest,
    responseType: grpc_service_pb.GetWorkflowConfigResponse,
    requestSerialize: serialize_automatedcodingworkflow_GetWorkflowConfigRequest,
    requestDeserialize: deserialize_automatedcodingworkflow_GetWorkflowConfigRequest,
    responseSerialize: serialize_automatedcodingworkflow_GetWorkflowConfigResponse,
    responseDeserialize: deserialize_automatedcodingworkflow_GetWorkflowConfigResponse,
  },
  setWorkspacePath: {
    path: '/automatedcodingworkflow.AutomatedCodingWorkflowService/SetWorkspacePath',
    requestStream: false,
    responseStream: false,
    requestType: grpc_service_pb.SetWorkspacePathRequest,
    responseType: grpc_service_pb.SetWorkspacePathResponse,
    requestSerialize: serialize_automatedcodingworkflow_SetWorkspacePathRequest,
    requestDeserialize: deserialize_automatedcodingworkflow_SetWorkspacePathRequest,
    responseSerialize: serialize_automatedcodingworkflow_SetWorkspacePathResponse,
    responseDeserialize: deserialize_automatedcodingworkflow_SetWorkspacePathResponse,
  },
};

exports.AutomatedCodingWorkflowServiceClient = grpc.makeGenericClientConstructor(AutomatedCodingWorkflowServiceService);
