#version 450
#extension GL_ARB_separate_shader_objects : enable

layout(set = 0, binding = 0) uniform CameraBufferObject {
    mat4 view;
    mat4 proj;
} camera;

// TODO: Declare fragment shader inputs
layout(location = 0) in float inHeight;

layout(location = 0) out vec4 outColor;

void main() {
    // TODO: Compute fragment color

    outColor = mix (vec4(0.0, 0.6, 0.0, 1.0), vec4(0.04, 0.78, 0.29, 1.0), inHeight);
}
