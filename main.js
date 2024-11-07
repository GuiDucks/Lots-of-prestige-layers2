let XP = new Decimal('0')
let Level = new Decimal('1')
let NextLevelXP = new Decimal('10')
let LevelScaling = new Decimal('1.5')
let MaxLevel = new Decimal('1')
let clickInterval;
const initialClickDelay = 200;
const clickSpeed = 1000 / 30;
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
    Entropy: new Decimal('0')
}
let Currencies = {
    BestReset: 0,
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
    Entropy: new Decimal('0')
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
function ShowUI(){
    const reset = Currencies.BestReset
    divs.forEach((div, index) => {
        if (reset >= index) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
}
ShowUI();
setInterval(ShowUI,1000);
divs.forEach((div) => {
    div.style.display = "none";
});
let buttons = [elements.presButton,elements.leavesButton,elements.FireButton,elements.EnergyButton,elements.SteelButton,
    elements.LavaButton,elements.LightButton,elements.DarkButton,elements.DucksButton,elements.DarkMatterButton,elements.AtomsButton,
    elements.PoisonButton,elements.CrystalButton,elements.WaterButton,elements.ObsidianButton,elements.FrostGemsButton,elements.EntropyButton]
function UpdateUIs(){ // ======================== UI ========================
    const xpRemainder = SubtractRemainder(XP,Level,LevelScaling,new Decimal('10'))
    const nextXpRemainder = SubtractRemainder(NextLevelXP,Level,LevelScaling,new Decimal('10'));
    if (Level.gte(2)){
        xpBG.style.width = `${new Decimal('100').times(xpRemainder.div(nextXpRemainder))}%`;
        xpLabel.textContent = `${Format(xpRemainder.floor())} / ${Format(nextXpRemainder)} XP`;
    } else {
        xpBG.style.width = `${new Decimal('100').times(XP.div(NextLevelXP))}%`;
        xpLabel.textContent = `${Format(XP.floor())} / ${Format(NextLevelXP)} XP`;
    }
    document.querySelector('#ttlXpLabel').innerHTML = `${Format(XP.floor())} Total XP <br> Hold a button to click it 30 times per second`
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
}
function SetReset(value){
    if (Currencies.BestReset < value){
        Currencies.BestReset = value
    }
}
function Tick(){ // ======================== TICK ========================
    Boosts.SteelLeavesMult = Currencies.Steel.pow(1.7).add(1)
    Boosts.EnergyPPtsMult = Currencies.Energy.pow(2.85).times(2).add(1)
    Boosts.LavaXPMult = Currencies.Lava.pow(24).times(1e6).add(1)
    if (Currencies.Energy.gte(0.001)){
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
        Boosts.AtomsEnergyMult = Currencies.Atoms.pow(116).add(1)
        Boosts.AtomsDarkGen = Currencies.Atoms.pow(0.5).times(0.05)
        Currencies.Darkness = Currencies.Darkness.add(ResetCurrencies.Darkness.times(Boosts.AtomsDarkGen));
    }
    if (Currencies.Magic.gte(0.001)){
        if (Currencies.Magic.gte(1e12)){
            Boosts.MagicDMMult = Currencies.Magic.pow(40).div('1.587e472')
        } else {
            Boosts.MagicDMMult = Currencies.Magic.pow(0.65).add(1)
        }
        Boosts.MagicDucksGen = Currencies.Magic.pow(0.5).times(0.1)
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
    }
    Boosts.FireXPMult = Currencies.Fire.pow(2.5).times(3).add(1)
    Boosts.LeavesXPMult = Currencies.Leaves.pow(2.2).add(1)
    Boosts.PrestigeXPMult = Currencies.PPts.pow(0.75).add(1)
    Boosts.LightFireMult = Currencies.Light.pow(2.4).times(10).add(1)
    Boosts.DarkLeafMult = Currencies.Darkness.pow(32).times(10).add(1)
    Boosts.DucksSteelMult = Currencies.Ducks.pow(6.5).add(1)
    Boosts.DMLavaMult = Currencies.DarkMatter.pow(15).add(1)
    Boosts.PoisonDucksMult = Currencies.Poison.pow(75).add(1)
    Boosts.CrystalAtomsMult = Currencies.Crystals.pow(43).add(1)
    Boosts.WaterPoisonMult = Currencies.Water.pow(2).add(1)
    Boosts.ObsidianMagicMult = Currencies.Obsidian.pow(67).add(1)
    Boosts.FrostGemsWaterMult = Currencies.FrostGems.pow(3.2).add(1)
    Boosts.EntropyFrostMult = Currencies.Entropy.pow(2.1).add(1)
    XP = XP.add(new Decimal(0.1).times(Boosts.PrestigeXPMult).times(Boosts.LeavesXPMult).times(Boosts.FireXPMult).times(Boosts.LavaXPMult))
    CalculateLevel();
    if (Level.gte('200')){
        ResetCurrencies.PPts = (new Decimal('1.05').pow(Level.add(528.7))).times(Boosts.EnergyPPtsMult)
    } else {
        ResetCurrencies.PPts = (new Decimal('1.2').pow(Level.sub(5))).times(Boosts.EnergyPPtsMult)
    }
    if (Currencies.PPts.gte('1e50')){
        ResetCurrencies.Leaves = (Currencies.PPts.mul(1e110).pow(0.15)).times(Boosts.SteelLeavesMult).times(Boosts.DarkLeafMult);
    } else {
        ResetCurrencies.Leaves = (Currencies.PPts.div(100).pow(0.5)).times(Boosts.SteelLeavesMult).times(Boosts.DarkLeafMult);
    }
    ResetCurrencies.Fire = Currencies.Leaves.div(500).pow(0.55).times(Boosts.LightFireMult);
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
    ResetCurrencies.Obsidian = Currencies.Water.div(300).pow(0.39);
    ResetCurrencies.FrostGems = Currencies.Obsidian.div(50).pow(0.3).times(Boosts.EntropyFrostMult);
    ResetCurrencies.Entropy = Currencies.FrostGems.div(10e3).log10().pow(2)
}
const xpLabel = document.querySelector('#lvlXpLabel');
const xpBG = document.querySelector('#LevelBG');
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
        SetReset(18);
        Currencies.Entropy = Currencies.Entropy.add(ResetCurrencies.Entropy);
        PoisonReset();
        Currencies.Crystals = new Decimal(0.001);
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
// SET FUNCTIONS
function startClicking(button) {
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
});
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
function Format(Val) {
    const valDecimal = new Decimal(Val);
    if (valDecimal.gte(pow10(1e6,4))) {
        if (valDecimal.mag < 1000000) {
            return Format(new Decimal('10').pow(valDecimal.mag)) + "#" + Format(valDecimal.layer)
        } else {
          return Format(valDecimal.mag) + "#" + Format(valDecimal.layer+1)
        }
    } else if (valDecimal.gte('1e1000000')) {
        return "e" + Format(getBaseLog(10,valDecimal))
    } else if (valDecimal.gte('1e3003')) {
        const parts = valDecimal.toExponential(0).split('e');
        return parts[0] === "10" ? "1" : parts[0] + 'e' + AddComma(getBaseLog(10,valDecimal).add(0.01).floor().toString());
    } else if (valDecimal.gte('1e33') && valDecimal.lt('1e3003')) {
        /*const formatted = valDecimal.toExponential(2);
        const parts = formatted.split('e');
        parts[0] = parts[0].includes('.') ? parts[0].padEnd(4, '0') : parts[0] + '.00';
        parts[1] = parts[1].replace(/\+/, '');
        return parts.join('e');*/
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
    } else if (valDecimal.lt('1e3')) {
        return RoundNum(valDecimal).toString();
    } else {
        return AddComma(valDecimal.floor().toString()); 
    }
}
function SubtractRemainder(Currency,Level,Scaling,StartVal){
    return Currency.sub((Scaling.pow(Level.sub(2))).times(StartVal));
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
function CalculateLevel() {
    if (XP.gte(10)){
        Level = getBaseLog(LevelScaling, XP.div(10)).add(2).floor();
        NextLevelXP = LevelScaling.pow(Level.sub(1)).times(10);
    } else {
        Level = new Decimal(1);
        NextLevelXP = new Decimal(10);
    }
    document.querySelector('#lvlLabel').textContent = `Level ${Format(Level)}`
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
function loadCurrencies() {
    let storedData = localStorage.getItem(dataKey);
    if (storedData) {
        let currencyData = JSON.parse(storedData);
        for (let key in currencyData) {
            if (Currencies.hasOwnProperty(key)) {
                Currencies[key] = new Decimal(currencyData[key]);
            }
        }
    }
    loaded = true
}
setInterval(Save,5000)
loadCurrencies();