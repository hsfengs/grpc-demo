// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_Student_pb = require('../proto/Student_pb.js');

function serialize_com_hsfeng_protobuf_MyRequest(arg) {
  if (!(arg instanceof proto_Student_pb.MyRequest)) {
    throw new Error('Expected argument of type com.hsfeng.protobuf.MyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_hsfeng_protobuf_MyRequest(buffer_arg) {
  return proto_Student_pb.MyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_hsfeng_protobuf_MyResponse(arg) {
  if (!(arg instanceof proto_Student_pb.MyResponse)) {
    throw new Error('Expected argument of type com.hsfeng.protobuf.MyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_hsfeng_protobuf_MyResponse(buffer_arg) {
  return proto_Student_pb.MyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_hsfeng_protobuf_StreamRequest(arg) {
  if (!(arg instanceof proto_Student_pb.StreamRequest)) {
    throw new Error('Expected argument of type com.hsfeng.protobuf.StreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_hsfeng_protobuf_StreamRequest(buffer_arg) {
  return proto_Student_pb.StreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_hsfeng_protobuf_StreamResponse(arg) {
  if (!(arg instanceof proto_Student_pb.StreamResponse)) {
    throw new Error('Expected argument of type com.hsfeng.protobuf.StreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_hsfeng_protobuf_StreamResponse(buffer_arg) {
  return proto_Student_pb.StreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_hsfeng_protobuf_StudentRequest(arg) {
  if (!(arg instanceof proto_Student_pb.StudentRequest)) {
    throw new Error('Expected argument of type com.hsfeng.protobuf.StudentRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_hsfeng_protobuf_StudentRequest(buffer_arg) {
  return proto_Student_pb.StudentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_hsfeng_protobuf_StudentResponse(arg) {
  if (!(arg instanceof proto_Student_pb.StudentResponse)) {
    throw new Error('Expected argument of type com.hsfeng.protobuf.StudentResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_hsfeng_protobuf_StudentResponse(buffer_arg) {
  return proto_Student_pb.StudentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_hsfeng_protobuf_StudentResponseList(arg) {
  if (!(arg instanceof proto_Student_pb.StudentResponseList)) {
    throw new Error('Expected argument of type com.hsfeng.protobuf.StudentResponseList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_hsfeng_protobuf_StudentResponseList(buffer_arg) {
  return proto_Student_pb.StudentResponseList.deserializeBinary(new Uint8Array(buffer_arg));
}


var StudentServiceService = exports.StudentServiceService = {
  getRealNameByUsername: {
    path: '/com.hsfeng.protobuf.StudentService/GetRealNameByUsername',
    requestStream: false,
    responseStream: false,
    requestType: proto_Student_pb.MyRequest,
    responseType: proto_Student_pb.MyResponse,
    requestSerialize: serialize_com_hsfeng_protobuf_MyRequest,
    requestDeserialize: deserialize_com_hsfeng_protobuf_MyRequest,
    responseSerialize: serialize_com_hsfeng_protobuf_MyResponse,
    responseDeserialize: deserialize_com_hsfeng_protobuf_MyResponse,
  },
  getStudentsByAge: {
    path: '/com.hsfeng.protobuf.StudentService/GetStudentsByAge',
    requestStream: false,
    responseStream: true,
    requestType: proto_Student_pb.StudentRequest,
    responseType: proto_Student_pb.StudentResponse,
    requestSerialize: serialize_com_hsfeng_protobuf_StudentRequest,
    requestDeserialize: deserialize_com_hsfeng_protobuf_StudentRequest,
    responseSerialize: serialize_com_hsfeng_protobuf_StudentResponse,
    responseDeserialize: deserialize_com_hsfeng_protobuf_StudentResponse,
  },
  getStudentsWrapperByAges: {
    path: '/com.hsfeng.protobuf.StudentService/GetStudentsWrapperByAges',
    requestStream: true,
    responseStream: false,
    requestType: proto_Student_pb.StudentRequest,
    responseType: proto_Student_pb.StudentResponseList,
    requestSerialize: serialize_com_hsfeng_protobuf_StudentRequest,
    requestDeserialize: deserialize_com_hsfeng_protobuf_StudentRequest,
    responseSerialize: serialize_com_hsfeng_protobuf_StudentResponseList,
    responseDeserialize: deserialize_com_hsfeng_protobuf_StudentResponseList,
  },
  biTalk: {
    path: '/com.hsfeng.protobuf.StudentService/BiTalk',
    requestStream: true,
    responseStream: true,
    requestType: proto_Student_pb.StreamRequest,
    responseType: proto_Student_pb.StreamResponse,
    requestSerialize: serialize_com_hsfeng_protobuf_StreamRequest,
    requestDeserialize: deserialize_com_hsfeng_protobuf_StreamRequest,
    responseSerialize: serialize_com_hsfeng_protobuf_StreamResponse,
    responseDeserialize: deserialize_com_hsfeng_protobuf_StreamResponse,
  },
};

exports.StudentServiceClient = grpc.makeGenericClientConstructor(StudentServiceService);
