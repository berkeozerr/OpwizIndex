import {Option, OptionDetail} from "../../generated/schema";
import {OpWiz__optionsResult,OpWiz__optionDetailsResult} from "../../generated/OpWizChainLink/OpWiz"
import {
    ethereum,
    JSONValue,
    TypedMap,
    Entity,
    Bytes,
    Address,
    BigInt
  } from "@graphprotocol/graph-ts";


export function handleOptionMapping(option_result: OpWiz__optionsResult, option: Option): Option {
    
    option.initiator = option_result.value0,
    option.participant= option_result.value1,
    option.colleteral= option_result.value2,
    option.counterAsset= option_result.value3,
    option.premiumAsset= option_result.value4,
    option.amountOfColleteral= option_result.value5,
    option.amountOfCA= option_result.value6,
    option.premiumAmount= option_result.value7
    return option
    
}
export function handleOptionDetailMapping(option_result: OpWiz__optionDetailsResult, option: OptionDetail): OptionDetail {
    
    option.listAsset = option_result.value0,
    option.priceFeedAddress= option_result.value1,
    option.poolAddress= option_result.value2,
    option.offerEnd= option_result.value3,
    option.optionExpiry= option_result.value4,
    option.listAmount= option_result.value5,
    option.isListed= option_result.value6,
    option.exercised= option_result.value7
    return option
    
}
