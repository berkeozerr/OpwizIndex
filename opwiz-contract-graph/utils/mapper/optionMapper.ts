import {Option, OptionDetail} from "../../generated/schema";
import {OpwizFlexible__optionDetailsResult,OpwizFlexible__optionsResult} from "../../generated/OpwizFlexible/OpwizFlexible"
import {
    ethereum,
    JSONValue,
    TypedMap,
    Entity,
    Bytes,
    Address,
    BigInt
  } from "@graphprotocol/graph-ts";


export function handleOptionMapping(option_result: OpwizFlexible__optionsResult, option: Option): Option {
    
    option.initiator = option_result.value0,
    option.participant= option_result.value1,
    option.colleteral= option_result.value2,
    option.counterAsset= option_result.value3,
    option.premiumAsset= option_result.value4,
    option.indexOfColleteral =  option_result.value5,
    option.indexOfCounter =  option_result.value6,
    option.indexOfPremium =  option_result.value7,
    option.amountOfColleteral= option_result.value8,
    option.amountOfCA= option_result.value9,
    option.premiumAmount= option_result.value10
    return option
    
}
export function handleOptionDetailMapping(option_result: OpwizFlexible__optionDetailsResult, option: OptionDetail): OptionDetail {
    
    option.listAsset = option_result.value0,
    option.indexOfListAsset = option_result.value1,
    option.offerEnd= option_result.value2,
    option.optionExpiry= option_result.value3,
    option.listAmount= option_result.value4,
    option.colleteralType = option_result.value5,
    option.counterAssetType = option_result.value6,
    option.listAssetType = option_result.value7,
    option.premiumAssetType = option_result.value8,
    option.isListed= option_result.value9,
    option.exercised= option_result.value10
    return option
    
}
