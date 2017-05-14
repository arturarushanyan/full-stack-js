const env = process.env;

export const nodeEnv = env.Node_ENV || "development";

export default {
    port: env.PORT || 3737
};