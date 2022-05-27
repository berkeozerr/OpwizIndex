import {
  OpwizFlexible as OpWiz,
  Exercise as ExerciseEvent,
  Listed as ListedEvent,
  Offer as OfferEvent,
  Participate as ParticipateEvent,
  Transfer as TransferEvent,
  Withdraw as WithdrawEvent,
  WithdrawCA as WithdrawCAEvent,
  WithdrawColleteral as WithdrawColleteralEvent,
  WithdrawPremium as WithdrawPremiumEvent
} from "../generated/OpwizFlexible/OpwizFlexible"
import {ERC20} from "../generated/OpwizFlexible/ERC20"
import {Option,OptionDetail} from "../generated/schema"
import { log ,Address,BigInt,Bytes} from '@graphprotocol/graph-ts'
import { handleOptionMapping,handleOptionDetailMapping } from "../utils/mapper/optionMapper";

function handleUpdate(address: Address, id:BigInt):void{
  
  let option = Option.load(id.toString())
  if (option == null){
    option = new Option(id.toString())
  }
  let contract = OpWiz.bind(address)
  let optionResult = contract.options(id)
  option = handleOptionMapping(optionResult,option)

  let colleteralToken =  ERC20.bind(Address.fromBytes(option.colleteral as Bytes))
  option.colleteralAssetName = colleteralToken.name()

  let counterToken =  ERC20.bind(Address.fromBytes(option.counterAsset as Bytes))
  option.counterAssetName =  counterToken.name()
  let premiumToken =  ERC20.bind(Address.fromBytes(option.premiumAsset as Bytes))
  option.premiumAssetName = premiumToken.name()
  option.save()

  let optionDetail = OptionDetail.load(id.toString())
  if (optionDetail == null){
    optionDetail = new OptionDetail(id.toString())
  }
  let optionDetailResult = contract.optionDetails(id)
  optionDetail = handleOptionDetailMapping(optionDetailResult,optionDetail)
  optionDetail.save()

}
export function handleOffer(event: OfferEvent): void {
  handleUpdate(event.address,event.params.optionId)
}

export function handleParticipate(event: ParticipateEvent): void {
  handleUpdate(event.address,event.params.optionId)
}
export function handleExercise(event: ExerciseEvent): void {
  handleUpdate(event.address,event.params.optionId)
}
export function handleTransfer(event: TransferEvent): void {
  handleUpdate(event.address,event.params.optionId)
}
export function handleListed(event: ListedEvent): void {
  handleUpdate(event.address,event.params.optionId)
}
export function handleWithdrawCA(event: WithdrawCAEvent): void {
  handleUpdate(event.address,event.params.optionId)
}
export function handleWithdrawPremium(event: WithdrawPremiumEvent): void {
  handleUpdate(event.address,event.params.optionId)
}
export function handleWithdrawColleteral(event: WithdrawColleteralEvent): void {
  handleUpdate(event.address,event.params.optionId)
}

/*export function handleExercise(event: ExerciseEvent): void {
  let id = event.params.optionId.toString()
  let option = Option.load(id)
  if (option == null){
    option = new Option(id)
  }
  let contract = OpWiz.bind(event.address)
  let optionResult = contract.options(event.params.optionId)
  option = handleOptionMapping(optionResult,option)
  option.save()
  
  let optionDetail = OptionDetail.load(id)
  if (optionDetail == null){
    optionDetail = new OptionDetail(id)
  }
  let optionDetailResult = contract.optionDetails(event.params.optionId)
  optionDetail = handleOptionDetailMapping(optionDetailResult,optionDetail)
  optionDetail.save()

}*/


