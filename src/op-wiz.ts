import {
  Exercise as ExerciseEvent,
  Listed as ListedEvent,
  Offer as OfferEvent,
  Participate as ParticipateEvent,
  Transfer as TransferEvent,
  Withdraw as WithdrawEvent,
  WithdrawCA as WithdrawCAEvent,
  WithdrawColleteral as WithdrawColleteralEvent,
  WithdrawPremium as WithdrawPremiumEvent
} from "../generated/OpWiz/OpWiz"
import {
  Exercise,
  Listed,
  Offer,
  Participate,
  Transfer,
  Withdraw,
  WithdrawCA,
  WithdrawColleteral,
  WithdrawPremium
} from "../generated/schema"

export function handleExercise(event: ExerciseEvent): void {
  let entity = new Exercise(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.participator = event.params.participator
  entity.optionId = event.params.optionId
  entity.save()
}

export function handleListed(event: ListedEvent): void {
  let entity = new Listed(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.optionId = event.params.optionId
  entity.isListed = event.params.isListed
  entity.save()
}

export function handleOffer(event: OfferEvent): void {
  let entity = new Offer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.initiator = event.params.initiator
  entity.optionId = event.params.optionId
  entity.setted = event.params.setted
  entity.save()
}

export function handleParticipate(event: ParticipateEvent): void {
  let entity = new Participate(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.participator = event.params.participator
  entity.optionId = event.params.optionId
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.optionId = event.params.optionId
  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.asset = event.params.asset
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}

export function handleWithdrawCA(event: WithdrawCAEvent): void {
  let entity = new WithdrawCA(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.to = event.params.to
  entity.optionId = event.params.optionId
  entity.amount = event.params.amount
  entity.save()
}

export function handleWithdrawColleteral(event: WithdrawColleteralEvent): void {
  let entity = new WithdrawColleteral(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.to = event.params.to
  entity.optionId = event.params.optionId
  entity.amount = event.params.amount
  entity.save()
}

export function handleWithdrawPremium(event: WithdrawPremiumEvent): void {
  let entity = new WithdrawPremium(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.to = event.params.to
  entity.optionId = event.params.optionId
  entity.amount = event.params.amount
  entity.save()
}
