import fastify from "fastify";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod';
import { createEvent } from "./routes/create-events";
import { registerForEvent } from "./routes/register-for-event";

const app = fastify()

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent)
app.register(registerForEvent)

app.listen({ port: 3333}).then(() => {
    console.log('HTTP server running')
})

// Métodos HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS...

// COrpo da requisição (Request Body)

// Parâmetros de busca (Search Params /Query Params) 'http://localhost:3333/user?name=Vinicius'

// Parâmetros de rota () -> Identificação de recursos 'DELETE http://localhost:3333/users/5'

// Cabeçalhos (Headers) -> Contexto da requisição

