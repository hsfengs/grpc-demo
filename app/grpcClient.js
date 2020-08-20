var PROTO_FILE_PATH = "D:\\Git\\grpc-demo\\proto\\Student.proto";
var grpc = require("grpc");
var grpcService = grpc.load(PROTO_FILE_PATH).com.hsfeng.protobuf;

var client = new grpcService.StudentService("localhost:8899", grpc.credentials.createInsecure());

client.getRealNameByUsername({username: "lisi"}, function (error, respData) {
    console.log(respData);
});