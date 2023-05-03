import { Token } from "./token";
import { Word } from "./word";
import { Float } from "./real";
import { Type } from "./type";
import { Math } from "./math";

export type TokenType = Math | Word | Float | Type | Token;
