/*
 * lightfold
 *
 * Copyright(c) 2015 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

import assembler from '@reduct/assembler';

import Lightfold from './lib/index';

const app = assembler();

app.register(Lightfold);

app.run();
