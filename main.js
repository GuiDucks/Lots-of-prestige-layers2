let XP = new Decimal('0')
let Level = new Decimal('1')
let NextLevelXP = new Decimal('10')
let LevelScaling = new Decimal('1.5')
let MaxLevel = new Decimal('1')
let Tier = new Decimal('0')
let NextTierTP = new Decimal('10')
const loadStats = true;
/*let clickInterval;
const initialClickDelay = 200;
const clickSpeed = 1000 / 30;*/
let xpSoftcapRoot = 1
let scStart = new Decimal('1e303')
let Boosts = {
    PrestigeXPMult : 1,
    LeavesXPMult : 1,
    FireXPMult : 1,
    EnergyPPtsMult : 1,
    SteelLeavesMult : 1,
    LavaXPMult : 1,
    LightFireMult : 1,
    DarkLeafMult : 1,
    DucksSteelMult : 1,
    DMLavaMult : 1,
    AtomsEnergyMult : 1,
    AtomsDarkGen: 0,
    MagicDucksGen: 0,
    MagicDMMult : 1,
    PoisonDucksMult : 1,
    CrystalAtomsMult : 1,
    WaterPoisonMult : 1,
    ObsidianMagicMult : 1,
    FrostGemsWaterMult: 1,
    EntropyFrostMult: 1,
    TierXPPow: 1,
    ShardTPMult: 1,
    PlasmaEntropyPow: 1,
    PlasmaTPMult: 1,
    TimeTPMult: 1,
    StardustShardMult: 1,
    QuarksPlasmaMult: 1,
    FermionShardMult: 1,
    StarStardustMult: 1,
    QuasarPlasmaMult: 1,
}
let ResetCurrencies = {
    PPts: 0,
    Leaves: 0,
    Fire: 0,
    Energy: 0,
    Steel: 0,
    Lava: 0,
    Light: 0,
    Darkness: new Decimal('0'),
    Ducks: new Decimal('0'),
    DarkMatter: new Decimal('0'),
    Atoms: new Decimal('0'),
    Magic: new Decimal('0'),
    Poison: new Decimal('0'),
    Crystals: new Decimal('0'),
    Water: new Decimal('0'),
    Obsidian: new Decimal('0'),
    FrostGems: new Decimal('0'),
    Entropy: new Decimal('0'),
    Shards: new Decimal('1'),
    Plasma: new Decimal('0'),
    Time: new Decimal('0'),
    Stardust: new Decimal('0'),
    Quarks: new Decimal('0'),
    Fermions: new Decimal('0'),
    Stars: new Decimal('0'),
    Quasar: new Decimal('0')
}
let Currencies = {
    EntropyBoost: false,
    MultiShards: false,
    PlasmaTP: false,
    PlasmaShards: false,
    TimedBoost: false,
    StrongerTime: false,
    StardustRecovery: false,
    QuarkGen: false,
    PlasmaBooster: false,
    QuarkBooster: false,
    BestReset: 0,
    BestTier2Reset: -1,
    PPts: new Decimal('0'),
    Leaves: new Decimal('0'),
    Fire: new Decimal('0'),
    Energy: new Decimal('0'),
    Steel: new Decimal('0'),
    Lava: new Decimal('0'),
    Light: new Decimal('0'),
    Darkness: new Decimal('0'),
    Ducks: new Decimal('0'),
    DarkMatter: new Decimal('0'),
    Atoms: new Decimal('0'),
    Magic: new Decimal('0'),
    Poison: new Decimal('0'),
    Crystals: new Decimal('0'),
    Water: new Decimal('0'),
    Obsidian: new Decimal('0'),
    FrostGems: new Decimal('0'),
    Entropy: new Decimal('0'),
    Shards: new Decimal('0'),
    TP: new Decimal('0'),
    Plasma: new Decimal('0'),
    Time: new Decimal('0'),
    TimeGain: new Decimal('0'),
    Stardust: new Decimal('0'),
    Quarks: new Decimal('0'),
    Fermions: new Decimal('0'),
    Stars: new Decimal('0'),
    Quasars: new Decimal('0'),
}
let elements = {
    presButton: document.getElementById("PresButton"),
    presDesc: document.getElementById("PresDesc"),
    presBoosts: document.getElementById("PresBoosts"),
    leavesButton: document.getElementById("LeavesButton"),
    leavesDesc: document.getElementById("LeavesDesc"),
    leavesBoosts: document.getElementById("LeavesBoosts"),
    FireButton: document.getElementById("FireButton"),
    FireDesc: document.getElementById("FireDesc"),
    FireBoosts: document.getElementById("FireBoosts"),
    EnergyButton: document.getElementById("EnergyButton"),
    EnergyDesc: document.getElementById("EnergyDesc"),
    EnergyBoosts: document.getElementById("EnergyBoosts"),
    SteelButton: document.getElementById("SteelButton"),
    SteelDesc: document.getElementById("SteelDesc"),
    SteelBoosts: document.getElementById("SteelBoosts"),
    LavaButton: document.getElementById("LavaButton"),
    LavaDesc: document.getElementById("LavaDesc"),
    LavaBoosts: document.getElementById("LavaBoosts"),
    LightButton: document.getElementById("LightButton"),
    LightDesc: document.getElementById("LightDesc"),
    LightBoosts: document.getElementById("LightBoosts"),
    DarkButton: document.getElementById("DarknessButton"),
    DarkDesc: document.getElementById("DarknessDesc"),
    DarkBoosts: document.getElementById("DarknessBoosts"),
    DucksButton: document.getElementById("DucksButton"),
    DucksDesc: document.getElementById("DucksDesc"),
    DucksBoosts: document.getElementById("DucksBoosts"),
    DarkMatterButton: document.getElementById("DarkMatterButton"),
    DarkMatterDesc: document.getElementById("DarkMatterDesc"),
    DarkMatterBoosts: document.getElementById("DarkMatterBoosts"),
    AtomsButton: document.getElementById("AtomsButton"),
    AtomsDesc: document.getElementById("AtomsDesc"),
    AtomsBoosts: document.getElementById("AtomsBoosts"),
    MagicButton: document.getElementById("MagicButton"),
    MagicDesc: document.getElementById("MagicDesc"),
    MagicBoosts: document.getElementById("MagicBoosts"),
    PoisonButton: document.getElementById("PoisonButton"),
    PoisonDesc: document.getElementById("PoisonDesc"),
    PoisonBoosts: document.getElementById("PoisonBoosts"),
    CrystalButton: document.getElementById("CrystalButton"),
    CrystalDesc: document.getElementById("CrystalDesc"),
    CrystalBoosts: document.getElementById("CrystalBoosts"),
    WaterButton: document.getElementById("WaterButton"),
    WaterDesc: document.getElementById("WaterDesc"),
    WaterBoosts: document.getElementById("WaterBoosts"),
    ObsidianButton: document.getElementById("ObsidianButton"),
    ObsidianDesc: document.getElementById("ObsidianDesc"),
    ObsidianBoosts: document.getElementById("ObsidianBoosts"),
    FrostGemsButton: document.getElementById("FrostGemsButton"),
    FrostGemsDesc: document.getElementById("FrostGemsDesc"),
    FrostGemsBoosts: document.getElementById("FrostGemsBoosts"),
    EntropyButton: document.getElementById("EntropyButton"),
    EntropyDesc: document.getElementById("EntropyDesc"),
    EntropyBoosts: document.getElementById("EntropyBoosts"),
    RiftButton: document.getElementById("RiftButton"),
    RiftDesc: document.getElementById("RiftDesc"),
    RiftBoosts: document.getElementById("RiftBoosts"),
    PlasmaButton: document.getElementById("PlasmaButton"),
    PlasmaDesc: document.getElementById("PlasmaDesc"),
    PlasmaBoosts: document.getElementById("PlasmaBoosts"),
    TimeButton: document.getElementById("TimeButton"),
    TimeDesc: document.getElementById("TimeDesc"),
    TimeBoosts: document.getElementById("TimeBoosts"),
    StardustButton: document.getElementById("StardustButton"),
    StardustDesc: document.getElementById("StardustDesc"),
    StardustBoosts: document.getElementById("StardustBoosts"),
    QuarksButton: document.getElementById("QuarksButton"),
    QuarksDesc: document.getElementById("QuarksDesc"),
    QuarksBoosts: document.getElementById("QuarksBoosts"),
    FermionButton: document.getElementById("FermionButton"),
    FermionDesc: document.getElementById("FermionDesc"),
    FermionBoosts: document.getElementById("FermionBoosts"),
    StarButton: document.getElementById("StarsButton"),
    StarDesc: document.getElementById("StarsDesc"),
    StarBoosts: document.getElementById("StarsBoosts"),
    QuasarButton: document.getElementById("QuasarButton"),
    QuasarDesc: document.getElementById("QuasarDesc"),
    QuasarBoosts: document.getElementById("QuasarBoosts")
    /*Button: document.getElementById("Button"),
    Desc: document.getElementById("Desc"),
    Boosts: document.getElementById("Boosts"),*/
}
function GEBI(id){
    return document.getElementById(id+"Div")
}
let divs = [
    GEBI("Prestige"),GEBI("Leaves"),GEBI("Fire"),GEBI("Energy"),GEBI("Steel"),GEBI("Lava"),GEBI("Light"),GEBI("Darkness"),
    GEBI("Ducks"),GEBI("DarkMatter"),GEBI("Atoms"),GEBI("Magic"),GEBI("Poison"),GEBI("Crystal"),GEBI("Water"),GEBI("Obsidian"),
    GEBI("FrostGems"),GEBI("Entropy")
]
let tier2Divs = [
    GEBI("Rift"),GEBI("Plasma"),GEBI("Time"),GEBI("Stardust"),GEBI("Quarks"),GEBI("Fermion"),GEBI("Stars"),GEBI("Quasar")
]
function ShowUI(){
    const reset = Currencies.BestReset
    divs.forEach((div, index) => {
        div.style.display = reset >= index ? "block" : "none"
    });
    const reset2 = Currencies.BestTier2Reset
    tier2Divs.forEach((div, index) => {
        div.style.display = reset2 >= index ? "block" : "none"
    });
    document.getElementById('TierStroke').style.display = reset2 >= 1 ? "block" : "none"
    document.getElementById('tierLabel').style.display = document.getElementById('TierStroke').style.display
    document.getElementById('UpgOpenDiv').style.display = document.getElementById('TierStroke').style.display
}
setInterval(ShowUI,1000);
divs.forEach((div) => {
    div.style.display = "none";
});
tier2Divs.forEach((div) => {
    div.style.display = "none";
});
let buttons = [elements.presButton,elements.leavesButton,elements.FireButton,elements.EnergyButton,elements.SteelButton,
    elements.LavaButton,elements.LightButton,elements.DarkButton,elements.DucksButton,elements.DarkMatterButton,elements.AtomsButton,
    elements.PoisonButton,elements.CrystalButton,elements.WaterButton,elements.ObsidianButton,elements.FrostGemsButton,elements.EntropyButton,
    elements.RiftButton,elements.PlasmaButton,elements.TimeButton,elements.StardustButton,elements.QuarksButton]
let ttlXp = document.getElementById('ttlXpLabel')
function UpdateUIs(){ // ======================== UI ========================
    if (Level.gte('1e6')){
        if (Level.gte(2)){
            xpBG.style.width = '100%';
            xpLabel.textContent = Format(XP)+ " XP";
        } else {
            xpBG.style.width = `${new Decimal('100').times(XP.div(NextLevelXP))}%`;
            xpLabel.textContent = `${Format(XP.floor())} / ${Format(NextLevelXP)} XP`;
        }
        if (xpSoftcapRoot == 1){
            ttlXp.innerHTML = ''
        } else {
            ttlXp.style.color = 'rgb(255,0,0)';
            ttlXp.innerHTML = 'Due to XP Overflowing, XP is rooted by ' + Format(xpSoftcapRoot)
        }
    } else {
        const xpRemainder = SubtractRemainder(XP,Level,LevelScaling,new Decimal('10'))
        const nextXpRemainder = SubtractRemainder(NextLevelXP,Level,LevelScaling,new Decimal('10'));
        if (Level.gte(2)){
            xpBG.style.width = `${new Decimal('100').times(xpRemainder.div(nextXpRemainder))}%`;
            xpLabel.textContent = `${Format(xpRemainder,0)} / ${Format(nextXpRemainder,0)} XP`;
        } else {
            xpBG.style.width = `${new Decimal('100').times(XP.div(NextLevelXP))}%`;
            xpLabel.textContent = `${Format(XP,0)} / ${Format(NextLevelXP,0)} XP`;
        }
        document.querySelector('#ttlXpLabel').innerHTML = `${Format(XP,0)} Total XP`
        document.querySelector('#ttlXpLabel').style.color = 'rgb(0,0,0)'
    }
    if (Currencies.BestTier2Reset >= 1){
        const tpRemainder = SubtractRemainder2(Currencies.TP)
        const nextTpRemainder = SubtractRemainder2(NextTierTP);
        if (Tier.gte(1)){
            tpBG.style.width = `${new Decimal('100').times(tpRemainder.div(nextTpRemainder))}%`;
            tpLabel.textContent = `${Format(tpRemainder,0)} / ${Format(nextTpRemainder,0)} TP`;
        } else {
            tpBG.style.width = `${new Decimal('100').times(Currencies.TP.div(NextTierTP))}%`;
            tpLabel.textContent = `${Format(Currencies.TP,0)} / ${Format(NextTierTP,0)} TP`;
        }
        document.getElementById('tierLabel').textContent = "Tier " + Format(Tier,0) + " (Boosts XP by ^"+Format(Boosts.TierXPPow)+")"
    }
    SetButtonText(5,elements.presButton,ResetCurrencies.PPts," PPts","Level 5 Required",Level)
    elements.presDesc.innerHTML = Format(Currencies.PPts)+" PPts"
    elements.presBoosts.textContent = "Boosts XP by x"+Format(Boosts.PrestigeXPMult)
    SetButtonText(100,elements.leavesButton,ResetCurrencies.Leaves," Leaves","100 PPts Required",Currencies.PPts)
    elements.leavesDesc.textContent = Format(Currencies.Leaves)+" Leaves"
    elements.leavesBoosts.textContent = "Boosts XP by x"+Format(Boosts.LeavesXPMult)
    SetButtonText(500,elements.FireButton,ResetCurrencies.Fire," Fire","500 Leaves Required",Currencies.Leaves)
    elements.FireDesc.textContent = Format(Currencies.Fire)+" Fire"
    elements.FireBoosts.textContent = "Boosts XP by x"+Format(Boosts.FireXPMult)
    SetButtonText(10000,elements.EnergyButton,ResetCurrencies.Energy," Energy","10,000 Fire Required",Currencies.Fire)
    elements.EnergyDesc.textContent = Format(Currencies.Energy)+" Energy"
    elements.EnergyBoosts.textContent = "Boosts PPts by x"+Format(Boosts.EnergyPPtsMult) + " and generates PPts"
    SetButtonText(100,elements.SteelButton,ResetCurrencies.Steel," Steel","100 Energy Required",Currencies.Energy)
    elements.SteelDesc.textContent = Format(Currencies.Steel)+" Steel"
    elements.SteelBoosts.textContent = "Boosts Leaves by x"+Format(Boosts.SteelLeavesMult) + " and generates Leaves and below"
    SetButtonText(5000,elements.LavaButton,ResetCurrencies.Lava," Lava","5,000 Steel Required",Currencies.Steel)
    elements.LavaDesc.textContent = Format(Currencies.Lava)+" Lava"
    elements.LavaBoosts.textContent = "Boosts XP by x"+Format(Boosts.LavaXPMult) + " and generates Fire and below"
    SetButtonText(75,elements.LightButton,ResetCurrencies.Light," Light","75 Lava Required",Currencies.Lava)
    elements.LightDesc.textContent = Format(Currencies.Light)+" Light"
    elements.LightBoosts.textContent = "Boosts Fire by x"+Format(Boosts.LightFireMult) + " and generates Energy and below"
    SetButtonText(4000,elements.DarkButton,ResetCurrencies.Darkness," Darkness","4,000 Light Required",Currencies.Light)
    elements.DarkDesc.textContent = Format(Currencies.Darkness)+" Darkness"
    elements.DarkBoosts.textContent = "Boosts Leaves by x"+Format(Boosts.DarkLeafMult) + " and generates Steel and below"
    SetButtonText(60,elements.DucksButton,ResetCurrencies.Ducks," Ducks","60 Darkness Required",Currencies.Darkness)
    elements.DucksDesc.textContent = Format(Currencies.Ducks)+" Ducks"
    elements.DucksBoosts.textContent = "Boosts Steel by x"+Format(Boosts.DucksSteelMult) + " and generates Lava and below"
    SetButtonText(10000,elements.DarkMatterButton,ResetCurrencies.DarkMatter," Dark Matter","10,000 Ducks Required",Currencies.Ducks)
    elements.DarkMatterDesc.textContent = Format(Currencies.DarkMatter)+" Dark Matter"
    elements.DarkMatterBoosts.textContent = "Boosts Lava by x"+Format(Boosts.DMLavaMult) + " and generates Light and below"
    SetButtonText(250,elements.AtomsButton,ResetCurrencies.Atoms," Atoms","250 Dark Matter Required",Currencies.DarkMatter)
    elements.AtomsDesc.textContent = Format(Currencies.Atoms)+" Atoms"
    elements.AtomsBoosts.textContent = "Boosts Energy by x"+Format(Boosts.AtomsEnergyMult) + " and generates Darkness x"+ Format(Boosts.AtomsDarkGen) +" and below"
    SetButtonText(250,elements.MagicButton,ResetCurrencies.Magic," Magic","250 Atoms Required",Currencies.Atoms)
    elements.MagicDesc.textContent = Format(Currencies.Magic)+" Magic"
    elements.MagicBoosts.textContent = "Boosts Dark Matter by x"+Format(Boosts.MagicDMMult) + "(Increases 61.5x faster after 1T) and generates Ducks x"+ Format(Boosts.MagicDucksGen) +" and below"
    SetButtonText(1000,elements.PoisonButton,ResetCurrencies.Poison," Poison","1,000 Magic Required",Currencies.Magic)
    elements.PoisonDesc.textContent = Format(Currencies.Poison)+" Poison"
    elements.PoisonBoosts.textContent = "Boosts Ducks by x"+Format(Boosts.PoisonDucksMult) + " and generates Dark Matter and below"
    SetButtonText(250,elements.CrystalButton,ResetCurrencies.Crystals," Crystals","250 Poison Required",Currencies.Poison)
    elements.CrystalDesc.textContent = Format(Currencies.Crystals)+" Crystals"
    elements.CrystalBoosts.textContent = "Boosts Atoms by x"+Format(Boosts.CrystalAtomsMult) + " and generates Atoms and below"
    SetButtonText(150,elements.WaterButton,ResetCurrencies.Water," Water","150 Crystals Required",Currencies.Crystals)
    elements.WaterDesc.textContent = Format(Currencies.Water)+" Water"
    elements.WaterBoosts.textContent = "Boosts Poison by x"+Format(Boosts.WaterPoisonMult) + " and generates Magic and below"
    SetButtonText(300,elements.ObsidianButton,ResetCurrencies.Obsidian," Obsidian","300 Water Required",Currencies.Water)
    elements.ObsidianDesc.textContent = Format(Currencies.Obsidian)+" Obsidian"
    elements.ObsidianBoosts.textContent = "Boosts Magic by x"+Format(Boosts.ObsidianMagicMult) + " and generates Poison and below"
    SetButtonText(50,elements.FrostGemsButton,ResetCurrencies.FrostGems," FrostGems","50 Obsidian Required",Currencies.Obsidian)
    elements.FrostGemsDesc.textContent = Format(Currencies.FrostGems)+" Frost Gems"
    elements.FrostGemsBoosts.textContent = "Boosts Water by x"+Format(Boosts.FrostGemsWaterMult) + " and generates Crystals and below"
    SetButtonText(100e3,elements.EntropyButton,ResetCurrencies.Entropy," Entropy","100,000 Frost Gems Required",Currencies.FrostGems)
    elements.EntropyDesc.textContent = Format(Currencies.Entropy)+" Entropy"
    elements.EntropyBoosts.textContent = "Boosts Frost Gems by x"+Format(Boosts.EntropyFrostMult) + " and generates Water and below"
    if (Currencies.Entropy.gte(7500)) {
        elements.RiftButton.classList.remove('red');
        elements.RiftButton.classList.add('green');
        elements.RiftButton.textContent = Currencies.MultiShards == true ? ("+"+Format(ResetCurrencies.Shards)+" Shards") : "Enter the rift."
    } else {
        elements.RiftButton.classList.remove('green');
        elements.RiftButton.classList.add('red');
        elements.RiftButton.textContent = "7,500 Entropy required"
    }
    elements.RiftDesc.textContent = Format(Currencies.Shards)+" Shards"
    elements.RiftBoosts.textContent = "Boosts TP by x"+Format(Boosts.ShardTPMult)
    SetButtonText(130,elements.PlasmaButton,ResetCurrencies.Plasma," Plasma","130 Shards Required",Currencies.Shards)
    elements.PlasmaDesc.textContent = Format(Currencies.Plasma)+" Plasma"
    elements.PlasmaBoosts.textContent = "Boosts Entropy by ^"+Format(Boosts.PlasmaEntropyPow)
    if (Currencies.Plasma.gte(250)) {
        elements.TimeButton.classList.remove('red');
        elements.TimeButton.classList.add('green');
        elements.TimeButton.textContent = Currencies.TimeGain.gte(0.1) ? ("x"+Format(ResetCurrencies.Time.div(Currencies.TimeGain).add(1))+" Time speed") : ("+"+Format(ResetCurrencies.Time)+"/s")
    } else {
        elements.TimeButton.classList.remove('green');
        elements.TimeButton.classList.add('red');
        elements.TimeButton.textContent = "250 Plasma required"
    }
    elements.TimeDesc.textContent = Format(Currencies.Time)+"s of time"
    elements.TimeBoosts.textContent = "Boosts TP by x"+Format(Boosts.TimeTPMult)
    SetButtonText(150e3,elements.StardustButton,ResetCurrencies.Stardust," Stardust","150,000s of Time Required",Currencies.Time)
    elements.StardustDesc.textContent = Format(Currencies.Stardust)+" Stardust"
    elements.StardustBoosts.textContent = "Boosts Shards by x"+Format(Boosts.StardustShardMult)
    SetButtonText(2e3,elements.QuarksButton,ResetCurrencies.Quarks," Quarks","2,000 Stardust Required",Currencies.Stardust)
    elements.QuarksDesc.textContent = Format(Currencies.Quarks)+" Quarks"
    elements.QuarksBoosts.textContent = "Boosts Plasma by x"+Format(Boosts.QuarksPlasmaMult)
    SetButtonText(100,elements.FermionButton,ResetCurrencies.Fermions," Fermions","100 Quarks Required",Currencies.Quarks)
    elements.FermionDesc.textContent = Format(Currencies.Fermions)+" Fermions"
    elements.FermionBoosts.textContent = "Boosts Shards by x"+Format(Boosts.FermionShardMult) + " and automatically claims time speed"
    SetButtonText('500',elements.StarButton,ResetCurrencies.Stars," Stars","500 Fermions Required",Currencies.Fermions)
    elements.StarDesc.textContent = Format(Currencies.Stars)+" Stars"
    elements.StarBoosts.textContent = "Boosts Stardust by x"+Format(Boosts.StarStardustMult) + " and generates stardust"
    SetButtonText('400',elements.QuasarButton,ResetCurrencies.Quasar," Quasars","400 Stars Required",Currencies.Stars)
    elements.QuasarDesc.textContent = Format(Currencies.Quasars)+" Quasars"
    elements.QuasarBoosts.textContent = "Boosts Plasma by x"+Format(Boosts.QuasarPlasmaMult) + " and generates quarks"
}
function SetReset(value){
    if (Currencies.BestReset < value){
        Currencies.BestReset = value
        ShowUI();
    }
}
function SetReset2(value){
    if (Currencies.BestTier2Reset < value){
        Currencies.BestTier2Reset = value
        ShowUI();
    }
}
function SetUpgButton(id,def,value){
    const element = document.getElementById(id)
    if (value){
        element.textContent = "Bought"
        element.classList.remove('red');
        element.classList.add('green')
    } else {
        element.classList.remove('green');
        element.classList.add('red')
        document.getElementById(id).textContent = def
    }
}
function UpdUpgUIs(){
    if (document.getElementById("Upgrades").style.display == "block"){
        SetUpgButton("MSButton","4 Shards required",Currencies.MultiShards)
        SetUpgButton("EBButton","25 Shards required",Currencies.EntropyBoost)
        SetUpgButton("PTPButton","2 Plasma required",Currencies.PlasmaTP)
        SetUpgButton("PSButton","3 Plasma required",Currencies.PlasmaShards)
        SetUpgButton("TUpButton","1,000s of time required",Currencies.TimedBoost)
        SetUpgButton("TTPButton","10,000s of time required",Currencies.StrongerTime)
        SetUpgButton("SRButton","100 Stardust required",Currencies.StardustRecovery)
        SetUpgButton("QGButton","2.5 Quarks required",Currencies.QuarkGen)
        SetUpgButton("PBButton","5 Quarks required",Currencies.PlasmaBooster)
        SetUpgButton("QBButton","10 Stars required",Currencies.QuarkBooster)
        document.getElementById("PlasmaTPUpgrade").style.display = Currencies.BestTier2Reset >= 2 ? "block" : "none"
        document.getElementById("PlasmaShardsUpgrade").style.display = document.getElementById("PlasmaTPUpgrade").style.display
        document.getElementById("TimeUpgrade").style.display = Currencies.BestTier2Reset >= 3 ? "block" : "none"
        document.getElementById("TimeTPUpgrade").style.display = document.getElementById("TimeUpgrade").style.display
        document.getElementById("StardustRecoveryUpgrade").style.display = Currencies.BestTier2Reset >= 4 ? "block" : "none"
        document.getElementById("QuarkGenUpgrade").style.display = Currencies.BestTier2Reset >= 5 ? "block" : "none"
        document.getElementById("PlasmaBoosterUpgrade").style.display = document.getElementById("QuarkGenUpgrade").style.display
        document.getElementById("QuarkBoosterUpgrade").style.display = Currencies.BestTier2Reset >= 7 ? "block" : "none"
        if (Currencies.PlasmaTP == true){
            document.getElementById("PTPDesc").textContent = "TP gets a boost based on Plasma (Currently: x"+Format(Boosts.PlasmaTPMult)+")"
        } else {
            document.getElementById("PTPDesc").textContent = "TP gets a boost based on Plasma"
        }
    }
}
let canTick = true
let lastTick = Date.now()
function Tick(){ // ======================== TICK ========================
    if (!canTick){return}
    const tickDur = (Date.now()-lastTick)/1000
    lastTick = Date.now()
    Boosts.SteelLeavesMult = Currencies.Steel.pow(1.7).add(1)
    Boosts.EnergyPPtsMult = Currencies.Energy.pow(2.85).times(2).add(1)
    Boosts.LavaXPMult = Currencies.Lava.pow(24).times(1e6).add(1)
    /*if (Currencies.Energy.gte(0.001)){
        Currencies.PPts = Currencies.PPts.add(ResetCurrencies.PPts);
    }
    if (Currencies.Steel.gte(0.001)){
        Currencies.Leaves = Currencies.Leaves.add(ResetCurrencies.Leaves);
    }
    if (Currencies.Lava.gte(0.001)){
        Currencies.Fire = Currencies.Fire.add(ResetCurrencies.Fire);
    }
    if (Currencies.Light.gte(0.001)){
        Currencies.Energy = Currencies.Energy.add(ResetCurrencies.Energy);
    }
    if (Currencies.Darkness.gte(0.001)){
        Currencies.Steel = Currencies.Steel.add(ResetCurrencies.Steel);
    }
    if (Currencies.Ducks.gte(0.001)){
        Currencies.Lava = Currencies.Lava.add(ResetCurrencies.Lava);
    }
    if (Currencies.DarkMatter.gte(0.001)){
        Currencies.Light = Currencies.Light.add(ResetCurrencies.Light);
    }
    if (Currencies.Atoms.gte(0.001)){
        Currencies.Darkness = Currencies.Darkness.add(ResetCurrencies.Darkness.times(Boosts.AtomsDarkGen));
    }
    if (Currencies.Magic.gte(0.001)){
        Currencies.Ducks = Currencies.Ducks.add(ResetCurrencies.Ducks.times(Boosts.MagicDucksGen));
    }
    if (Currencies.Poison.gte(0.001)){
        Currencies.DarkMatter = Currencies.DarkMatter.add(ResetCurrencies.DarkMatter);
    }
    if (Currencies.Crystals.gte(0.001)){
        Currencies.Atoms = Currencies.Atoms.add(ResetCurrencies.Atoms);
    }
    if (Currencies.Water.gte(0.001)){
        Currencies.Magic = Currencies.Magic.add(ResetCurrencies.Magic);
    }
    if (Currencies.Obsidian.gte(0.001)){
        Currencies.Poison = Currencies.Poison.add(ResetCurrencies.Poison);
    }
    if (Currencies.FrostGems.gte(0.001)){
        Currencies.Crystals = Currencies.Crystals.add(ResetCurrencies.Crystals);
    }
    if (Currencies.Entropy.gte(0.001)){
        Currencies.Water = Currencies.Water.add(ResetCurrencies.Water);
    }*/
   if (Currencies.BestReset>=4){
        Currencies.PPts = Currencies.PPts.add(ResetCurrencies.PPts);
    }
    if (Currencies.BestReset>=5){
        Currencies.Leaves = Currencies.Leaves.add(ResetCurrencies.Leaves);
    }
    if (Currencies.BestReset>=6){
        Currencies.Fire = Currencies.Fire.add(ResetCurrencies.Fire);
    }
    if (Currencies.BestReset>=7){
        Currencies.Energy = Currencies.Energy.add(ResetCurrencies.Energy);
    }
    if (Currencies.BestReset>=8){
        Currencies.Steel = Currencies.Steel.add(ResetCurrencies.Steel);
    }
    if (Currencies.BestReset>=9){
        Currencies.Lava = Currencies.Lava.add(ResetCurrencies.Lava);
    }
    if (Currencies.BestReset>=10){
        Currencies.Light = Currencies.Light.add(ResetCurrencies.Light);
    }
    if (Currencies.BestReset>=11){
        Currencies.Darkness = Currencies.Darkness.add(ResetCurrencies.Darkness.times(Boosts.AtomsDarkGen));
    }
    if (Currencies.BestReset>=12){
        Currencies.Ducks = Currencies.Ducks.add(ResetCurrencies.Ducks.times(Boosts.MagicDucksGen));
    }
    if (Currencies.BestReset>=13){
        Currencies.DarkMatter = Currencies.DarkMatter.add(ResetCurrencies.DarkMatter);
    }
    if (Currencies.BestReset>=14){
        Currencies.Atoms = Currencies.Atoms.add(ResetCurrencies.Atoms);
    }
    if (Currencies.BestReset>=15){
        Currencies.Magic = Currencies.Magic.add(ResetCurrencies.Magic);
    }
    if (Currencies.BestReset>=16){
        Currencies.Poison = Currencies.Poison.add(ResetCurrencies.Poison);
    }
    if (Currencies.BestReset>=17){
        Currencies.Crystals = Currencies.Crystals.add(ResetCurrencies.Crystals);
    }
    if (Currencies.BestReset>=18){
        Currencies.Water = Currencies.Water.add(ResetCurrencies.Water);
    }
    if (Currencies.BestTier2Reset>=4){
        Currencies.Shards = Currencies.Shards.add(ResetCurrencies.Shards.times(tickDur))
    }
    if (Currencies.StrongerTime == true){
        if (Currencies.BestReset >= 15){
            Currencies.Obsidian = Currencies.Obsidian.add(ResetCurrencies.Obsidian);
            Currencies.FrostGems = Currencies.FrostGems.add(ResetCurrencies.FrostGems);
            Currencies.Entropy = Currencies.Entropy.add(ResetCurrencies.Entropy);
            Currencies.BestReset = 18
        }
    }
    if (Currencies.QuarkGen == true){
        Currencies.Plasma = Currencies.Plasma.add(ResetCurrencies.Plasma.times(tickDur))
    }
    if (Currencies.BestTier2Reset>=6){
        Currencies.TimeGain = Currencies.TimeGain.add(ResetCurrencies.Time)
    }
    if (Currencies.BestTier2Reset>=7){
        Currencies.Stardust = Currencies.Stardust.add(ResetCurrencies.Stardust.times(tickDur*3))
    }
    if (Currencies.BestTier2Reset>=8){
        Currencies.Quarks = Currencies.Quarks.add(ResetCurrencies.Quarks.times(tickDur*3))
    }
    Currencies.Time = Currencies.Time.add(Currencies.TimeGain.times(tickDur))
    Boosts.FireXPMult = Currencies.Fire.pow(2.5).times(3).add(1)
    Boosts.LeavesXPMult = Currencies.Leaves.pow(2.2).add(1)
    Boosts.PrestigeXPMult = Currencies.PPts.pow(0.75).add(1)
    Boosts.LightFireMult = Currencies.Light.pow(2.4).times(10).add(1)
    Boosts.DarkLeafMult = Currencies.Darkness.pow(32).times(10).add(1)
    Boosts.DucksSteelMult = Currencies.Ducks.pow(6.5).add(1)
    Boosts.DMLavaMult = Currencies.DarkMatter.pow(15).add(1)
    Boosts.PoisonDucksMult = Currencies.Poison.pow(75).add(1)
    if (Currencies.Magic.gte(1e12)){
        Boosts.MagicDMMult = Currencies.Magic.pow(40).div('1.587e472')
    } else {
        Boosts.MagicDMMult = Currencies.Magic.pow(0.65).add(1)
    }
    Boosts.CrystalAtomsMult = Currencies.Crystals.pow(43).add(1)
    Boosts.WaterPoisonMult = Currencies.Water.pow(2).add(1)
    Boosts.ObsidianMagicMult = Currencies.Obsidian.pow(67).add(1)
    Boosts.FrostGemsWaterMult = Currencies.FrostGems.pow(3.2).add(1)
    Boosts.EntropyFrostMult = Currencies.Entropy.pow(2.1).add(1)
    Boosts.AtomsEnergyMult = Currencies.Atoms.pow(116).add(1)
    Boosts.AtomsDarkGen = Currencies.Atoms.pow(0.5).times(0.05)
    Boosts.ShardTPMult = Currencies.Shards.pow(3)
    Boosts.MagicDucksGen = Currencies.Magic.pow(0.5).times(0.1)
    Boosts.TierXPPow = Decimal.pow(1.1,Tier)
    Boosts.PlasmaEntropyPow = Currencies.Plasma.times(24).add(10).log10().pow(Currencies.PlasmaBooster ? 3.5 : 2)
    Boosts.PlasmaTPMult = Currencies.PlasmaTP == true ? Currencies.Plasma.pow(Currencies.TimedBoost == true ? 5 : 2).mul(100).add(1) : 1
    Boosts.TimeTPMult = Currencies.Time.add(1).pow(Currencies.StrongerTime == true ? 5.4 : 1.3)
    Boosts.StardustShardMult = Currencies.Stardust.pow(1.9).add(1)
    Boosts.QuarksPlasmaMult = Currencies.Quarks.pow(Currencies.QuarkBooster ? 2.4 : 1.6).times(7).add(1)
    Boosts.FermionShardMult = Currencies.Fermions.pow(9.5).add(1)
    Boosts.StarStardustMult = Currencies.Stars.pow(4.7).add(1)
    Boosts.QuasarPlasmaMult = Currencies.Quasars.pow(14.7).add(1)
    if (Currencies.BestTier2Reset >= 1) {
        Currencies.TP = Currencies.TP.add(Boosts.ShardTPMult.times(tickDur).times(Boosts.PlasmaTPMult).times(Boosts.TimeTPMult))
    }
    let xpGain = new Decimal(3).times(Boosts.PrestigeXPMult).times(Boosts.LeavesXPMult).times(Boosts.FireXPMult).times(Boosts.LavaXPMult).pow(Boosts.TierXPPow).times(tickDur)
    if (xpGain.gte('1e1000000000000')){
        xpSoftcapRoot = xpGain.log10().div(1e12).root(3.4)
    } else {
        xpSoftcapRoot = 1
    }
    XP = XP.add(xpGain.root(xpSoftcapRoot))
    CalculateLevel();
    CalculateTier();
    if (Level.gte('200')){
        ResetCurrencies.PPts = (new Decimal('1.05').pow(Level.add(562.4))).times(Boosts.EnergyPPtsMult)
    } else {
        ResetCurrencies.PPts = (new Decimal('1.2').pow(Level.add(4))).times(Boosts.EnergyPPtsMult)
    }
    if (Currencies.PPts.gte('1e50')){
        ResetCurrencies.Leaves = (Currencies.PPts.mul(1e110).pow(0.15)).times(Boosts.SteelLeavesMult).times(Boosts.DarkLeafMult);
    } else {
        ResetCurrencies.Leaves = (Currencies.PPts.div(100).pow(0.5)).times(Boosts.SteelLeavesMult).times(Boosts.DarkLeafMult);
    }
    ResetCurrencies.Fire = Currencies.Leaves.div(300).pow(0.55).times(Boosts.LightFireMult);
    ResetCurrencies.Energy = Currencies.Fire.div(10000).pow(0.6).times(Boosts.AtomsEnergyMult);
    ResetCurrencies.Steel = Currencies.Energy.div(100).pow(0.5).times(Boosts.DucksSteelMult);
    if (Currencies.Steel.gte('2.5e11')){
        ResetCurrencies.Lava = Currencies.Steel.mul(1.25e27).pow(0.15).times(Boosts.DMLavaMult);
    } else {
        ResetCurrencies.Lava = Currencies.Steel.div(5000).pow(0.75).times(Boosts.DMLavaMult);
    }
    ResetCurrencies.Light = Currencies.Lava.div(75).pow(0.65);
    ResetCurrencies.Darkness = Currencies.Light.div(4000).pow(0.55);
    if (Currencies.Darkness.gte('1e16')){
        ResetCurrencies.Ducks = Currencies.Darkness.mul(1.284e55).pow(0.09).times(Boosts.PoisonDucksMult);
    } else {
        ResetCurrencies.Ducks = Currencies.Darkness.div(60).pow(0.45).times(Boosts.PoisonDucksMult);
    }
    ResetCurrencies.DarkMatter = Currencies.Ducks.div(10000).pow(0.25).times(Boosts.MagicDMMult);
    if (Currencies.DarkMatter.gte(1e78)){
        ResetCurrencies.Atoms = Currencies.DarkMatter.mul('1e938').pow(0.05).times(Boosts.CrystalAtomsMult);
    } else {
        ResetCurrencies.Atoms = Currencies.DarkMatter.div(250).pow(0.67).times(Boosts.CrystalAtomsMult);
    }
    if (Currencies.Atoms.gte('1e21')){
        ResetCurrencies.Magic = Currencies.Atoms.mul(1.4311e51).pow(0.08).times(Boosts.ObsidianMagicMult);
    } else {
        ResetCurrencies.Magic = Currencies.Atoms.div(250).pow(0.3).times(Boosts.ObsidianMagicMult);
    }
    if (Currencies.Magic.gte('1e48')){
        ResetCurrencies.Poison = Currencies.Magic.mul('1e207').pow(0.06).times(Boosts.WaterPoisonMult);
    } else {
        ResetCurrencies.Poison = Currencies.Magic.div(1000).pow(0.34).times(Boosts.WaterPoisonMult);
    }
    ResetCurrencies.Crystals = Currencies.Poison.div(250).pow(0.4);
    ResetCurrencies.Water = Currencies.Crystals.div(150).pow(0.35).times(Boosts.FrostGemsWaterMult);
    if (Currencies.Water.gte('1e393')){
        ResetCurrencies.Obsidian = Currencies.Water.times('1e4690').pow(0.03);
    } else {
        ResetCurrencies.Obsidian = Currencies.Water.div(300).pow(0.39);
    }
    ResetCurrencies.FrostGems = Currencies.Obsidian.div(50).pow(0.3).times(Boosts.EntropyFrostMult);
    ResetCurrencies.Entropy = Currencies.FrostGems.add(1).div(10e3).log10().pow(Currencies.EntropyBoost == true ? 4 : 2).pow(Boosts.PlasmaEntropyPow)
    ResetCurrencies.Shards = Currencies.MultiShards == true ? Currencies.Entropy.add(2).log10().times(Boosts.StardustShardMult).times(Boosts.FermionShardMult).pow(Currencies.PlasmaShards == true ? 2 : 1) : 1
    if (Currencies.Shards.gte('1e100')){
        ResetCurrencies.Plasma = Currencies.Shards.times('3.2e188').pow(0.19).times(Boosts.QuarksPlasmaMult).times(Boosts.QuasarPlasmaMult)
    } else {
        ResetCurrencies.Plasma = Currencies.Shards.div(130).pow(0.56).times(Boosts.QuarksPlasmaMult).times(Boosts.QuasarPlasmaMult)
    }
    ResetCurrencies.Time = Currencies.Plasma.div(250).pow(1.7)
    if (Currencies.Time.gte(1e10)){
        ResetCurrencies.Stardust = Currencies.Time.times(4.37e4).pow(0.13).times(Boosts.StarStardustMult)
    } else {
        ResetCurrencies.Stardust = Currencies.Time.div(150e3).pow(0.4).times(Boosts.StarStardustMult)
    }
    ResetCurrencies.Quarks = Currencies.Stardust.div(2e3).pow(0.47)
    ResetCurrencies.Fermions = Currencies.Quarks.div(100).pow(0.44)
    if (Currencies.Fermions.gte(1e21)){
        ResetCurrencies.Stars = Currencies.Fermions.times(4.4e17).pow(0.18)
    } else {
        ResetCurrencies.Stars = Currencies.Fermions.div(500).pow(0.38)
    }
    ResetCurrencies.Quasar = Currencies.Stars.div(400).pow(0.36)
}
const xpLabel = document.querySelector('#lvlXpLabel');
const xpBG = document.querySelector('#LevelBG');
const tpLabel = document.querySelector('#tierTpLabel');
const tpBG = document.querySelector('#TierBG');
setInterval(Tick,33);
setInterval(UpdateUIs,33);
// RESETS
function Prestige(){
    if (Level.gte(5)){
        SetReset(1);
        Currencies.PPts = Currencies.PPts.add(ResetCurrencies.PPts)
        Level = new Decimal(0)
        XP = new Decimal(0);
        ResetCurrencies.PPts = new Decimal(0);
    }
}
function Leaves(){
    if (Currencies.PPts.gte(100)){
        SetReset(2);
        Currencies.Leaves = Currencies.Leaves.add(ResetCurrencies.Leaves)
        Level = new Decimal(0)
        XP = new Decimal(0);
        Currencies.PPts = new Decimal(0)
        ResetCurrencies.PPts = new Decimal(0);
        ResetCurrencies.Leaves = new Decimal(0);
    }
}
function Fire(){
    if (Currencies.Leaves.gte(500)){
        SetReset(3);
        Currencies.Fire = Currencies.Fire.add(ResetCurrencies.Fire);
        Level = new Decimal(0);
        XP = new Decimal(0);
        Currencies.PPts = new Decimal(0);
        Currencies.Leaves = new Decimal(0);
        ResetCurrencies.PPts = new Decimal(0);
        ResetCurrencies.Leaves = new Decimal(0);
        ResetCurrencies.Fire = new Decimal(0);
    }
}
function Energy(){
    if (Currencies.Fire.gte(10000)){
        SetReset(4);
        Currencies.Energy = Currencies.Energy.add(ResetCurrencies.Energy);
        EnergyReset();
    }
}
function EnergyReset(){
    Level = new Decimal(0);
    XP = new Decimal(0);
    Currencies.PPts = new Decimal(0);
    Currencies.Leaves = new Decimal(0);
    Currencies.Fire = new Decimal(0);
    ResetCurrencies.PPts = new Decimal(0);
    ResetCurrencies.Leaves = new Decimal(0);
    ResetCurrencies.Fire = new Decimal(0);
    ResetCurrencies.Energy = new Decimal(0);
}
function Steel(){
    if (Currencies.Energy.gte(100)){
        SetReset(5);
        Currencies.Steel = Currencies.Steel.add(ResetCurrencies.Steel);
        EnergyReset();
        Currencies.Energy = new Decimal(0.001);
        ResetCurrencies.Steel = new Decimal(0.001);
    }
}
function Lava(){
    if (Currencies.Steel.gte(5000)){
        SetReset(6);
        Currencies.Lava = Currencies.Lava.add(ResetCurrencies.Lava);
        EnergyReset();
        Currencies.Energy = new Decimal(0.001);
        Currencies.Steel = new Decimal(0.001);
        ResetCurrencies.Lava = new Decimal(0);
        ResetCurrencies.Steel = new Decimal(0);
    }
}
function Light(){
    if (Currencies.Lava.gte(75)){
        SetReset(7);
        Currencies.Light = Currencies.Light.add(ResetCurrencies.Light);
        EnergyReset();
        Currencies.Energy = new Decimal(0.001);
        Currencies.Steel = new Decimal(0.001);
        Currencies.Lava = new Decimal(0.001);
        ResetCurrencies.Light = new Decimal(0);
        ResetCurrencies.Lava = new Decimal(0);
        ResetCurrencies.Steel = new Decimal(0);
    }
}
function Dark(){
    if (Currencies.Light.gte(4000)){
        SetReset(8);
        Currencies.Darkness = Currencies.Darkness.add(ResetCurrencies.Darkness);
        EnergyReset();
        Currencies.Energy = new Decimal(0.001);
        Currencies.Steel = new Decimal(0.001);
        Currencies.Lava = new Decimal(0.001);
        Currencies.Light = new Decimal(0.001);
        ResetCurrencies.Darkness = new Decimal(0);
        ResetCurrencies.Light = new Decimal(0);
        ResetCurrencies.Lava = new Decimal(0);
        ResetCurrencies.Steel = new Decimal(0);
    }
}
function DuckReset(){
    EnergyReset();
    Currencies.Energy = new Decimal(0.001);
    Currencies.Steel = new Decimal(0.001);
    Currencies.Lava = new Decimal(0.001);
    Currencies.Light = new Decimal(0.001);
    Currencies.Darkness = new Decimal(0.001);
    ResetCurrencies.Ducks = new Decimal(0);
    ResetCurrencies.Darkness = new Decimal(0);
    ResetCurrencies.Light = new Decimal(0);
    ResetCurrencies.Lava = new Decimal(0);
    ResetCurrencies.Steel = new Decimal(0);
}
function Duck(){
    if (Currencies.Darkness.gte(60)){
        SetReset(9);
        Currencies.Ducks = Currencies.Ducks.add(ResetCurrencies.Ducks);
        DuckReset();
    }
}
function DM(){
    if (Currencies.Ducks.gte(10000)){
        SetReset(10);
        Currencies.DarkMatter = Currencies.DarkMatter.add(ResetCurrencies.DarkMatter);
        DuckReset();
        Currencies.Ducks = new Decimal(0.001);
        ResetCurrencies.DarkMatter = new Decimal(0);
    }
}
function Atoms(){
    if (Currencies.DarkMatter.gte(250)){
        SetReset(11);
        Currencies.Atoms = Currencies.Atoms.add(ResetCurrencies.Atoms);
        DuckReset();
        Currencies.Ducks = new Decimal(0.001);
        Currencies.DarkMatter = new Decimal(0.001);
        ResetCurrencies.Atoms = new Decimal(0);
        ResetCurrencies.DarkMatter = new Decimal(0);
    }
}
function Magic(){
    if (Currencies.Atoms.gte(250)){
        SetReset(12);
        Currencies.Magic = Currencies.Magic.add(ResetCurrencies.Magic);
        DuckReset();
        Currencies.Ducks = new Decimal(0.001);
        Currencies.DarkMatter = new Decimal(0.001);
        Currencies.Atoms = new Decimal(0.001);
        ResetCurrencies.Magic = new Decimal(0);
        ResetCurrencies.Atoms = new Decimal(0);
        ResetCurrencies.DarkMatter = new Decimal(0);
    }
}
function PoisonReset(){
    DuckReset();
    Currencies.Ducks = new Decimal(0.001);
    Currencies.DarkMatter = new Decimal(0.001);
    Currencies.Atoms = new Decimal(0.001);
    Currencies.Magic = new Decimal(0.001);
    ResetCurrencies.Poison = new Decimal(0);
    ResetCurrencies.Magic = new Decimal(0);
    ResetCurrencies.Atoms = new Decimal(0);
    ResetCurrencies.DarkMatter = new Decimal(0);
}
function Poison(){
    if (Currencies.Magic.gte(1000)){
        SetReset(13);
        Currencies.Poison = Currencies.Poison.add(ResetCurrencies.Poison);
        PoisonReset();
    }
}
function Crystal(){
    if (Currencies.Poison.gte(250)){
        SetReset(14);
        Currencies.Crystals = Currencies.Crystals.add(ResetCurrencies.Crystals);
        PoisonReset();
        Currencies.Poison = new Decimal(0.001);
        ResetCurrencies.Crystals = new Decimal(0);
    }
}
function Water(){
    if (Currencies.Crystals.gte(100)){
        SetReset(15);
        Currencies.Water = Currencies.Water.add(ResetCurrencies.Water);
        PoisonReset();
        Currencies.Crystals = new Decimal(0.001);
        Currencies.Poison = new Decimal(0.001);
        ResetCurrencies.Crystals = new Decimal(0);
        ResetCurrencies.Water = new Decimal(0);
    }
}
function Obsidian(){
    if (Currencies.Water.gte(300)){
        SetReset(16);
        Currencies.Obsidian = Currencies.Obsidian.add(ResetCurrencies.Obsidian);
        PoisonReset();
        Currencies.Crystals = new Decimal(0.001);
        Currencies.Poison = new Decimal(0.001);
        Currencies.Water = new Decimal(0.001);
        ResetCurrencies.Obsidian = new Decimal(0);
        ResetCurrencies.Crystals = new Decimal(0);
        ResetCurrencies.Water = new Decimal(0);
    }
}
function FrostGems(){
    if (Currencies.Obsidian.gte(50)){
        SetReset(17);
        Currencies.FrostGems = Currencies.FrostGems.add(ResetCurrencies.FrostGems);
        PoisonReset();
        Currencies.Crystals = new Decimal(0.001);
        Currencies.Poison = new Decimal(0.001);
        Currencies.Water = new Decimal(0.001);
        Currencies.Obsidian = new Decimal(0.001);
        ResetCurrencies.FrostGems = new Decimal(0);
        ResetCurrencies.Obsidian = new Decimal(0);
        ResetCurrencies.Crystals = new Decimal(0);
        ResetCurrencies.Water = new Decimal(0);
    }
}
function Entropy(){
    if (Currencies.FrostGems.gte(100e3)){
        SetReset2(0);
        SetReset(18)
        Currencies.Entropy = Currencies.Entropy.add(ResetCurrencies.Entropy);
        PoisonReset();
        Currencies.Poison = new Decimal(0.001);
        Currencies.Water = new Decimal(0.001);
        Currencies.Obsidian = new Decimal(0.001);
        Currencies.FrostGems = new Decimal(0.001);
        ResetCurrencies.FrostGems = new Decimal(0);
        ResetCurrencies.Obsidian = new Decimal(0);
        ResetCurrencies.Crystals = new Decimal(0);
        ResetCurrencies.Water = new Decimal(0);
        ResetCurrencies.Obsidian = new Decimal(0);
    }
}
function RiftReset(){
    canTick = false
    Currencies.Poison = new Decimal(0)
    Currencies.PPts = new Decimal(0)
    Currencies.Leaves = new Decimal(0)
    Currencies.Fire = new Decimal(0)
    Currencies.Energy = new Decimal(0);
    Currencies.Steel = new Decimal(0);
    Currencies.Lava = new Decimal(0);
    Currencies.Light = new Decimal(0);
    Currencies.Darkness = new Decimal(0);
    Currencies.Crystals = new Decimal(0);
    Currencies.Water = new Decimal(0);
    Currencies.Obsidian = new Decimal(0);
    Currencies.FrostGems = new Decimal(0);
    Currencies.Entropy = new Decimal(0);
    Currencies.Ducks = new Decimal(0);
    Currencies.DarkMatter = new Decimal(0);
    Currencies.Atoms = new Decimal(0);
    Currencies.Magic = new Decimal(0);
    Currencies.TP = new Decimal(0)
    if (Currencies.StardustRecovery){
        Currencies.BestReset = 15
        Currencies.Water = new Decimal(10)
        Currencies.Poison = new Decimal(1)
        Currencies.Magic = new Decimal(1)
        Currencies.Atoms = new Decimal(1)
    } else if (Currencies.TimedBoost){
        Currencies.BestReset = 13
        Currencies.Poison = new Decimal(1)
        Currencies.Magic = new Decimal(1)
        Currencies.Atoms = new Decimal(1)
    } else if (Currencies.PlasmaShards == true){
        Currencies.BestReset = 8
        Currencies.Darkness = new Decimal(1)
    } else {
        Currencies.BestReset = 0
    }
    Boosts.TierXPPow = new Decimal(1)
    XP = new Decimal(0)
    ResetCurrencies.FrostGems = new Decimal(0);
    ResetCurrencies.Obsidian = new Decimal(0);
    ResetCurrencies.Crystals = new Decimal(0);
    ResetCurrencies.Water = new Decimal(0);
    ResetCurrencies.Obsidian = new Decimal(0);
    ResetCurrencies.Poison = new Decimal(0);
    ResetCurrencies.Magic = new Decimal(0);
    ResetCurrencies.Atoms = new Decimal(0);
    ResetCurrencies.DarkMatter = new Decimal(0);
    ResetCurrencies.Ducks = new Decimal(0);
    ResetCurrencies.PPts = new Decimal(0);
    ResetCurrencies.Leaves = new Decimal(0);
    ResetCurrencies.Fire = new Decimal(0);
    ResetCurrencies.Energy = new Decimal(0);
    ResetCurrencies.Darkness = new Decimal(0);
    ResetCurrencies.Light = new Decimal(0);
    ResetCurrencies.Lava = new Decimal(0);
    ResetCurrencies.Steel = new Decimal(0);
    ResetCurrencies.Entropy = new Decimal(0)
    /*if (Currencies.TimedBoost == true){
        PoisonReset()
        Currencies.Poison = new Decimal(1)
    } else {
        Currencies.Ducks = new Decimal(0);
        Currencies.DarkMatter = new Decimal(0);
        Currencies.Atoms = new Decimal(0);
        Currencies.Magic = new Decimal(0);
        if (Currencies.PlasmaShards == true){
            DuckReset()
            Currencies.Darkness = new Decimal(1)
        } else {
            Currencies.PPts = new Decimal(0)
            Currencies.Leaves = new Decimal(0)
            Currencies.Fire = new Decimal(0)
            Currencies.Energy = new Decimal(0);
            Currencies.Steel = new Decimal(0);
            Currencies.Lava = new Decimal(0);
            Currencies.Light = new Decimal(0);
            Currencies.Darkness = new Decimal(0);
            ResetCurrencies.PPts = new Decimal(0);
            ResetCurrencies.Leaves = new Decimal(0);
            ResetCurrencies.Fire = new Decimal(0);
            ResetCurrencies.Energy = new Decimal(0);
            ResetCurrencies.Darkness = new Decimal(0);
            ResetCurrencies.Light = new Decimal(0);
            ResetCurrencies.Lava = new Decimal(0);
            ResetCurrencies.Steel = new Decimal(0);
        }
    }*/
    canTick = true
    Tick();
}
function Rift(){
    if (Currencies.Entropy.gte(7500)){
        SetReset2(1);
        Currencies.Shards = Currencies.Shards.add(ResetCurrencies.Shards);
        ResetCurrencies.Shards = new Decimal(0)
        RiftReset();
    }
}
function Plasma(){
    if (Currencies.Shards.gte(130)){
        SetReset2(2);
        Currencies.Plasma = Currencies.Plasma.add(ResetCurrencies.Plasma);
        Currencies.Shards = new Decimal(1.5)
        ResetCurrencies.Shards = new Decimal(0)
        ResetCurrencies.Plasma = new Decimal(0)
        RiftReset();
    }
}
function Time(){
    if (Currencies.Plasma.gte(250)){
        SetReset2(3);
        Currencies.TimeGain = Currencies.TimeGain.add(ResetCurrencies.Time);
        Currencies.Shards = new Decimal(1)
        Currencies.Plasma = new Decimal(0)
        Currencies.Time = new Decimal(0)
        ResetCurrencies.Shards = new Decimal(0)
        ResetCurrencies.Time = new Decimal(0)
        ResetCurrencies.Plasma = new Decimal(0)
        RiftReset();
    }
}
function Stardust(){
    if (Currencies.Time.gte(150000)){
        SetReset2(4);
        Currencies.Stardust = Currencies.Stardust.add(ResetCurrencies.Stardust);
        Currencies.Shards = new Decimal(1)
        Currencies.Plasma = new Decimal(0)
        Currencies.Time = new Decimal(0)
        Currencies.TimeGain = new Decimal(0)
        ResetCurrencies.Shards = new Decimal(0)
        ResetCurrencies.Time = new Decimal(0)
        ResetCurrencies.Plasma = new Decimal(0)
        ResetCurrencies.Stardust = new Decimal(0)
        RiftReset();
    }
}
function Quarks(){
    if (Currencies.Stardust.gte(2e3)){
        SetReset2(5);
        Currencies.Quarks = Currencies.Quarks.add(ResetCurrencies.Quarks);
        Currencies.Shards = new Decimal(1)
        Currencies.Plasma = new Decimal(0)
        Currencies.Time = new Decimal(0)
        Currencies.Stardust = new Decimal(0)
        Currencies.TimeGain = new Decimal(0)
        ResetCurrencies.Shards = new Decimal(0)
        ResetCurrencies.Time = new Decimal(0)
        ResetCurrencies.Plasma = new Decimal(0)
        ResetCurrencies.Stardust = new Decimal(0)
        ResetCurrencies.Quarks = new Decimal(0)
        RiftReset();
    }
}
function Fermions(){
    if (Currencies.Quarks.gte(100)){
        SetReset2(6);
        Currencies.Fermions = Currencies.Fermions.add(ResetCurrencies.Fermions);
        Currencies.Shards = new Decimal(1)
        Currencies.Plasma = new Decimal(0)
        Currencies.Time = new Decimal(0)
        Currencies.Stardust = new Decimal(0)
        Currencies.TimeGain = new Decimal(0)
        Currencies.Quarks = new Decimal(0)
        ResetCurrencies.Shards = new Decimal(0)
        ResetCurrencies.Time = new Decimal(0)
        ResetCurrencies.Plasma = new Decimal(0)
        ResetCurrencies.Stardust = new Decimal(0)
        ResetCurrencies.Quarks = new Decimal(0)
        ResetCurrencies.Fermions = new Decimal(0)
        RiftReset();
    }
}
function StarReset(){
    Currencies.Fermions = new Decimal(0)
    Currencies.Shards = new Decimal(1)
    Currencies.Plasma = new Decimal(0)
    Currencies.Time = new Decimal(0)
    Currencies.Stardust = new Decimal(0)
    Currencies.TimeGain = new Decimal(0)
    Currencies.Quarks = new Decimal(0)
    ResetCurrencies.Shards = new Decimal(0)
    ResetCurrencies.Time = new Decimal(0)
    ResetCurrencies.Plasma = new Decimal(0)
    ResetCurrencies.Stardust = new Decimal(0)
    ResetCurrencies.Quarks = new Decimal(0)
    ResetCurrencies.Fermions = new Decimal(0)
    ResetCurrencies.Stars = new Decimal(0)
    RiftReset();
}
function Stars(){
    if (Currencies.Fermions.gte('500')){
        SetReset2(7);
        Currencies.Stars = Currencies.Stars.add(ResetCurrencies.Stars);
        StarReset();
    }
}
function Quasar(){
    if (Currencies.Stars.gte('400')){
        SetReset2(8);
        Currencies.Quasars = Currencies.Quasars.add(ResetCurrencies.Quasar);
        Currencies.Stars = new Decimal(0)
        ResetCurrencies.Quasar = new Decimal(0)
        StarReset();
    }
}
ShowUI();
// SET FUNCTIONS
/*function startClicking(button) {
    button.click();
    clickInterval = setInterval(() => {
        button.click();
    }, clickSpeed);
}
function stopClicking() {
    clearInterval(clickInterval);
}
buttons.forEach(button => {
    let isClicked = false;
    let timer;
    button.addEventListener('mousedown', () => {
        isClicked = true;
        timer = setTimeout(() => {
            if (isClicked) {
                startClicking(button);
            }
        }, initialClickDelay);
    });
    button.addEventListener('mouseup', () => {
        isClicked = false;
        clearTimeout(timer);
        stopClicking();
    });

    button.addEventListener('mouseleave', () => {
        isClicked = false;
        clearTimeout(timer);
        stopClicking();
    });
});*/
function pow10(vall,tier = null) {
    let val = new Decimal('0');
    if (tier == null) {
        return new Decimal('10').pow(vall);
    } else if (tier < 0) {
        val = vall
        val.sign = 1;
        val.layer += tier;
        if (val.layer < 0) {
            val.layer = 0;
            val.mag = getBaseLog(10,vall.mag);
            val.sign = vall.sign;
        }
        return new Decimal(val.toString());
    } else {
        val.sign = 1;
        val.mag = getBaseLog(10,vall).toString();
        val.layer = tier+1;
        return new Decimal(val.toString());
    }
}
function getBaseLog(base, value) {
    const baseDecimal = new Decimal(base);
    const valueDecimal = new Decimal(value);
    const result = valueDecimal.log(baseDecimal);
    return result;
}
function RoundNum(Val) {
    const valDecimal = new Decimal(Val);
    return valDecimal.times(100).floor()/100;
}
let Abbreviations = ["k","M","B","T","Qd","Qn","Sx","Sp","Oc","No"];
let Abbreviations2 = ["","U","D","T","Qt","Qn","Sx","Sp","Oc","Nv"];
let Abbreviations3 = ["","De","Vt","Tg","qg","Qg","sg","Sg","Og","Ng"];
let Abbreviations4 = ["","Ce","Dn","Tr","Qu","Qe","Se","Si","Ot","Ni"];
function Format(Val,fix) {
    const valDecimal = new Decimal(Val);
    if (valDecimal.gte('1e1000000')) {
        return "e" + Format(valDecimal.log10())
    } else if (valDecimal.gte(pow10(1e6,4))) {
        if (valDecimal.mag < 1000000) {
            return Format(new Decimal('10').pow(valDecimal.mag)) + "#" + Format(valDecimal.layer)
        } else {
          return Format(valDecimal.mag) + "#" + Format(valDecimal.layer+1)
        }
    } else if (valDecimal.gte('1e10000')) {
        const parts = valDecimal.toExponential(0).split('e');
        return (Number(parts[0]) >= 10 ? "1" : parts[0]) + 'e' + AddComma(getBaseLog(10,valDecimal).add(0.01).floor().toString());
    } else if (valDecimal.gte('1e33') && valDecimal.lt(scStart)) {
        let logarithm = getBaseLog(1000, valDecimal.div(1e3)).floor().toString() % 10;
        let logarithm3 = getBaseLog(1e30, valDecimal.div(1e3)).floor().toString() % 10;
        let logarithm4 = getBaseLog('1e300', valDecimal.div(1e3)).floor().toString() % 10;
        let newVal = valDecimal.add(0.001).div(new Decimal('1000').pow(getBaseLog(1000, valDecimal.add(0.001)).floor()));
        let logarithm2 = getBaseLog(10, newVal);
        let formattedVal = newVal.toFixed(2 - logarithm2);
        if (logarithm.toString() < 4) {
            formattedVal = newVal.toFixed(3 - logarithm2);
        }
        let suffix = Abbreviations2[logarithm.toString()] + Abbreviations3[logarithm3.toString()] + (Abbreviations4[logarithm4.toString()] || "");
        let result = formattedVal + suffix;
        if (valDecimal.lessThan(new Decimal('1e303'))) {
            while (result.length < 8) {
                formattedVal = parseFloat(newVal).toFixed((formattedVal.split('.')[1] || "").length + 1);
                result = formattedVal + suffix;
            }
        } else {
            while (result.length < 10) {
                formattedVal = parseFloat(newVal).toFixed((formattedVal.split('.')[1] || "").length + 1);
                result = formattedVal + suffix;
            }
        }
        if (result.length == 9 || result.length == 11){
            formattedVal = parseFloat(newVal).toFixed(0) + " ";
            result = formattedVal + suffix
        }
        return result;
    } else if (valDecimal.gte('1e6') && valDecimal.lt('1e33')) {
        let logarithm = getBaseLog(1000,valDecimal.add(0.001)).floor();
        let newVal = valDecimal.add(0.001).div(new Decimal('1000').pow(logarithm))
        let logarithm2 = getBaseLog(10,newVal)
        const formattedValue = newVal.toFixed(4-logarithm2);
    
        return formattedValue+Abbreviations[logarithm.toString()-1];
    } else if (valDecimal.gte(scStart)){
        const parts = [valDecimal.div(Decimal.pow(10,valDecimal.log10().sub(2).floor())).floor().div(100).toFixed(2),valDecimal.log10().floor()];
        //parts[0] = parts[0].includes('.') ? parts[0].padEnd(4, '0') : parts[0] + '.00';
        parts[0] = Number(parts[0]) >= 10 ? '1.00' : parts[0]
        parts[1] = parts[1] >= 1000 ? AddComma(String(parts[1])) : parts[1]
        return parts.join('e');
    } else if (valDecimal.lt('1e3')) {
        return RoundNum(valDecimal).toFixed(((fix+1)||3)-1).toString();
    } else {
        return AddComma(valDecimal.floor().toString()); 
    }
}
function SubtractRemainder(Currency,Level,Scaling,StartVal){
    return Currency.sub((Scaling.pow(Level.sub(2))).times(StartVal));
}
function SubtractRemainder2(Currency){
    return Currency.sub(TierScaling.pow(Tier.sub(1)).times(2));
}
function SetButtonText(req,button,currency,currencyName,reqText,reqVar){
    if (reqVar.gte(req)) {
        button.classList.remove('red');
        button.classList.add('green');
        button.textContent = "+"+Format(currency) + currencyName
    } else {
        button.classList.remove('green');
        button.classList.add('red');
        button.textContent = reqText
    }
}
let scs = 303
function ChangeSCStart(){
    if (scs == 303){
        scStart = new Decimal('1e33')
        scs = 33
        document.getElementById("SCStartButton").textContent = "Scientific notation starts at 1e33 (1De)"
    } else if (scs == 33){
        scStart = new Decimal('1e3003')
        scs = 3003
        document.getElementById("SCStartButton").textContent = "Scientific notation starts at 1e3,003 (1Mi)"
    } else if (scs == 3003){
        scStart = new Decimal('1e303')
        scs = 303
        document.getElementById("SCStartButton").textContent = "Scientific notation starts at 1e303 (1Ce)"
    }
}
function CalculateLevel() {
    if (XP.gte(10)){
        Level = getBaseLog(LevelScaling, XP.div(10)).add(2).floor();
        NextLevelXP = LevelScaling.pow(Level.sub(1)).times(10);
    } else {
        Level = new Decimal(1);
        NextLevelXP = new Decimal(10);
    }
    document.querySelector('#lvlLabel').textContent = `Level ${Format(Level,0)}`
}
let colors = ["rgb(180,255,255)","rgb(80,50,255)"]
function SwitchTab(id){
    if (Currencies.Shards.gte(3.5) || Currencies.BestTier2Reset >= 2){
        document.getElementById("Resets").style.display = id == 0 ? "block" : "none"
        document.getElementById("Upgrades").style.display = id == 1 ? "block" : "none"
        document.getElementById("body").style.backgroundColor = colors[id]
        UpdUpgUIs();
    }
}
const TierScaling = new Decimal('2')
function CalculateTier() {
    if (Currencies.TP.gte(2)){
        Tier = getBaseLog(TierScaling, Currencies.TP.div(2)).add(1).floor();
        NextTierTP = TierScaling.pow(Tier.sub(0)).times(2);
    } else {
        Tier = new Decimal(0);
        NextTierTP = new Decimal(2);
    }
    document.querySelector('#lvlLabel').textContent = `Level ${Format(Level,0)}`
}
function BuyUpg(upg){
    if (upg==1){
        if (Currencies.Shards.gte(4)){
            Currencies.MultiShards = true
        }
    } else if (upg==2){
        if (Currencies.Shards.gte(25)){
            Currencies.EntropyBoost = true
        }
    } else if(upg==3){
        if (Currencies.Plasma.gte(2)){
            Currencies.PlasmaTP = true
        }
    } else if (upg==4){
        if (Currencies.Plasma.gte(3)){
            Currencies.PlasmaShards = true
        }
    } else if (upg==5){
        if (Currencies.Time.gte(1000)){
            Currencies.TimedBoost = true
        }
    } else if (upg==6){
        if (Currencies.Time.gte(10000)){
            Currencies.StrongerTime = true
        }
    } else if (upg==7){
        if (Currencies.Stardust.gte(100)){
            Currencies.StardustRecovery = true
        }
    } else if (upg==8){
        if (Currencies.Quarks.gte(2.5)){
            Currencies.QuarkGen = true
        }
    } else if (upg==9){
        if (Currencies.Quarks.gte(5)){
            Currencies.PlasmaBooster = true
        }
    } else if (upg==10){
        if (Currencies.Stars.gte(10)){
            Currencies.QuarkBooster = true
        }
    }
    UpdUpgUIs();
}
function AddComma(str) {
    const commaIndex = str.length - 3;
    return str.slice(0, commaIndex) + ',' + str.slice(commaIndex);
}
const dataKey = "LOPL_Currencies_a7s3dlcn5z3"
let loaded = false
function Save() {
    if (loaded){
        let currencyData = {};
        for (let key in Currencies) {
            currencyData[key] = Currencies[key].toString();
        }
        localStorage.setItem(dataKey, JSON.stringify(currencyData));
    }
}
const nonDecimals = ["BestReset","BestTier2Reset"]
function loadCurrencies() {
    let storedData = localStorage.getItem(dataKey);
    if (storedData) {
        let currencyData = JSON.parse(storedData);
        for (let key in currencyData) {
            if (Currencies.hasOwnProperty(key)) {
                if (currencyData[key] == "false" || currencyData[key] == "true"){
                    Currencies[key] = currencyData[key] == "true";
                } else {
                    Currencies[key] = new Decimal(currencyData[key]);
                }
            }
        }
        loaded = true
        for (let key in nonDecimals){
            const choice = Currencies[nonDecimals[key]]
            if (choice.sign){
                Currencies[nonDecimals[key]] = Currencies[nonDecimals[key]].toNumber()
            }
        }
        ShowUI();
    }
    loaded = true
}
setInterval(Save,5000)
setInterval(UpdUpgUIs,1000)
loadCurrencies();