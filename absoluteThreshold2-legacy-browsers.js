/*************************** 
 * Absolutethreshold2 *
 ***************************/


// store info about the experiment session:
let expName = 'absoluteThreshold2';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomRoutineBegin());
flowScheduler.add(welcomRoutineEachFrame());
flowScheduler.add(welcomRoutineEnd());
flowScheduler.add(instruction1RoutineBegin());
flowScheduler.add(instruction1RoutineEachFrame());
flowScheduler.add(instruction1RoutineEnd());
flowScheduler.add(instruction2RoutineBegin());
flowScheduler.add(instruction2RoutineEachFrame());
flowScheduler.add(instruction2RoutineEnd());
const test1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(test1LoopBegin(test1LoopScheduler));
flowScheduler.add(test1LoopScheduler);
flowScheduler.add(test1LoopEnd);


flowScheduler.add(instruction3RoutineBegin());
flowScheduler.add(instruction3RoutineEachFrame());
flowScheduler.add(instruction3RoutineEnd());
flowScheduler.add(instruction4RoutineBegin());
flowScheduler.add(instruction4RoutineEachFrame());
flowScheduler.add(instruction4RoutineEnd());
const ascendingLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ascendingLoopLoopBegin(ascendingLoopLoopScheduler));
flowScheduler.add(ascendingLoopLoopScheduler);
flowScheduler.add(ascendingLoopLoopEnd);


flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(goodbyRoutineBegin());
flowScheduler.add(goodbyRoutineEachFrame());
flowScheduler.add(goodbyRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'test.xlsx', 'path': 'test.xlsx'},
    {'name': 'MainLevels_101.xlsx', 'path': 'MainLevels_101.xlsx'},
    {'name': 'welcom.png', 'path': 'welcom.png'},
    {'name': '11.png', 'path': '11.png'},
    {'name': '12.png', 'path': '12.png'},
    {'name': '13.png', 'path': '13.png'},
    {'name': '14.png', 'path': '14.png'},
    {'name': 'the end.png', 'path': 'the end.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var welcomClock;
var image;
var instruction1Clock;
var image_2;
var instruction2Clock;
var image_3;
var testiClock;
var polygon;
var instruction3Clock;
var image_6;
var instruction4Clock;
var image_4;
var key_resp_2;
var maintestClock;
var polygon_2;
var key_resp;
var RT;
var EndClock;
var EndText;
var EndKey;
var goodbyClock;
var image_5;
var key_resp_3;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcom"
  welcomClock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'welcom.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "instruction1"
  instruction1Clock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : '11.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "instruction2"
  instruction2Clock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : '12.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "testi"
  testiClock = new util.Clock();
  polygon = new visual.Polygon({
    win: psychoJS.window, name: 'polygon', 
    edges: 100, size:[0.5, 0.5],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.5, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "instruction3"
  instruction3Clock = new util.Clock();
  image_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_6', units : undefined, 
    image : '13.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "instruction4"
  instruction4Clock = new util.Clock();
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : undefined, 
    image : '14.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "maintest"
  maintestClock = new util.Clock();
  polygon_2 = new visual.Polygon({
    win: psychoJS.window, name: 'polygon_2', 
    edges: 100, size:[0.5, 0.5],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 0.5, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from stopLoop
  RT = null;
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  EndText = new visual.TextStim({
    win: psychoJS.window,
    name: 'EndText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.07,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'Arabic',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  EndKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "goodby"
  goodbyClock = new util.Clock();
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : undefined, 
    image : 'the end.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.5, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var welcomMaxDurationReached;
var welcomMaxDuration;
var welcomComponents;
function welcomRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcom' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcomClock.reset(routineTimer.getTime());
    routineTimer.add(3.000000);
    welcomMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('welcom.started', globalClock.getTime());
    welcomMaxDuration = null
    // keep track of which components have finished
    welcomComponents = [];
    welcomComponents.push(image);
    
    welcomComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function welcomRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcom' ---
    // get current time
    t = welcomClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // if image is active this frame...
    if (image.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image.tStop = t;  // not accounting for scr refresh
      image.frameNStop = frameN;  // exact frame index
      // update status
      image.status = PsychoJS.Status.FINISHED;
      image.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    welcomComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcom' ---
    welcomComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('welcom.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (welcomMaxDurationReached) {
        welcomClock.add(welcomMaxDuration);
    } else {
        welcomClock.add(3.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction1MaxDurationReached;
var instruction1MaxDuration;
var instruction1Components;
function instruction1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction1' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction1Clock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    instruction1MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction1.started', globalClock.getTime());
    instruction1MaxDuration = null
    // keep track of which components have finished
    instruction1Components = [];
    instruction1Components.push(image_2);
    
    instruction1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction1' ---
    // get current time
    t = instruction1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // if image_2 is active this frame...
    if (image_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_2.tStop = t;  // not accounting for scr refresh
      image_2.frameNStop = frameN;  // exact frame index
      // update status
      image_2.status = PsychoJS.Status.FINISHED;
      image_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction1' ---
    instruction1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction1.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (instruction1MaxDurationReached) {
        instruction1Clock.add(instruction1MaxDuration);
    } else {
        instruction1Clock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction2MaxDurationReached;
var instruction2MaxDuration;
var instruction2Components;
function instruction2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction2Clock.reset(routineTimer.getTime());
    routineTimer.add(4.000000);
    instruction2MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction2.started', globalClock.getTime());
    instruction2MaxDuration = null
    // keep track of which components have finished
    instruction2Components = [];
    instruction2Components.push(image_3);
    
    instruction2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction2' ---
    // get current time
    t = instruction2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_3* updates
    if (t >= 0.0 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }
    
    
    // if image_3 is active this frame...
    if (image_3.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_3.tStop = t;  // not accounting for scr refresh
      image_3.frameNStop = frameN;  // exact frame index
      // update status
      image_3.status = PsychoJS.Status.FINISHED;
      image_3.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction2' ---
    instruction2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction2.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (instruction2MaxDurationReached) {
        instruction2Clock.add(instruction2MaxDuration);
    } else {
        instruction2Clock.add(4.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test1;
function test1LoopBegin(test1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    test1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'test.xlsx',
      seed: undefined, name: 'test1'
    });
    psychoJS.experiment.addLoop(test1); // add the loop to the experiment
    currentLoop = test1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    test1.forEach(function() {
      snapshot = test1.getSnapshot();
    
      test1LoopScheduler.add(importConditions(snapshot));
      test1LoopScheduler.add(testiRoutineBegin(snapshot));
      test1LoopScheduler.add(testiRoutineEachFrame());
      test1LoopScheduler.add(testiRoutineEnd(snapshot));
      test1LoopScheduler.add(test1LoopEndIteration(test1LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function test1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(test1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function test1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var ascendingLoop;
function ascendingLoopLoopBegin(ascendingLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    ascendingLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'MainLevels_101.xlsx',
      seed: undefined, name: 'ascendingLoop'
    });
    psychoJS.experiment.addLoop(ascendingLoop); // add the loop to the experiment
    currentLoop = ascendingLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    ascendingLoop.forEach(function() {
      snapshot = ascendingLoop.getSnapshot();
    
      ascendingLoopLoopScheduler.add(importConditions(snapshot));
      ascendingLoopLoopScheduler.add(maintestRoutineBegin(snapshot));
      ascendingLoopLoopScheduler.add(maintestRoutineEachFrame());
      ascendingLoopLoopScheduler.add(maintestRoutineEnd(snapshot));
      ascendingLoopLoopScheduler.add(ascendingLoopLoopEndIteration(ascendingLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function ascendingLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(ascendingLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function ascendingLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var testiMaxDurationReached;
var testiMaxDuration;
var testiComponents;
function testiRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'testi' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    testiClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    testiMaxDurationReached = false;
    // update component parameters for each repeat
    polygon.setFillColor(new util.Color([Intensity, Intensity, Intensity]));
    polygon.setLineColor(new util.Color([Intensity, Intensity, Intensity]));
    psychoJS.experiment.addData('testi.started', globalClock.getTime());
    testiMaxDuration = null
    // keep track of which components have finished
    testiComponents = [];
    testiComponents.push(polygon);
    
    testiComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function testiRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'testi' ---
    // get current time
    t = testiClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon* updates
    if (t >= 0.0 && polygon.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon.tStart = t;  // (not accounting for frame time here)
      polygon.frameNStart = frameN;  // exact frame index
      
      polygon.setAutoDraw(true);
    }
    
    
    // if polygon is active this frame...
    if (polygon.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      polygon.tStop = t;  // not accounting for scr refresh
      polygon.frameNStop = frameN;  // exact frame index
      // update status
      polygon.status = PsychoJS.Status.FINISHED;
      polygon.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    testiComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function testiRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'testi' ---
    testiComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('testi.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (testiMaxDurationReached) {
        testiClock.add(testiMaxDuration);
    } else {
        testiClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction3MaxDurationReached;
var instruction3MaxDuration;
var instruction3Components;
function instruction3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction3Clock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    instruction3MaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('instruction3.started', globalClock.getTime());
    instruction3MaxDuration = null
    // keep track of which components have finished
    instruction3Components = [];
    instruction3Components.push(image_6);
    
    instruction3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction3' ---
    // get current time
    t = instruction3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_6* updates
    if (t >= 0.0 && image_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_6.tStart = t;  // (not accounting for frame time here)
      image_6.frameNStart = frameN;  // exact frame index
      
      image_6.setAutoDraw(true);
    }
    
    
    // if image_6 is active this frame...
    if (image_6.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (image_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      image_6.tStop = t;  // not accounting for scr refresh
      image_6.frameNStop = frameN;  // exact frame index
      // update status
      image_6.status = PsychoJS.Status.FINISHED;
      image_6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction3' ---
    instruction3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction3.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (instruction3MaxDurationReached) {
        instruction3Clock.add(instruction3MaxDuration);
    } else {
        instruction3Clock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instruction4MaxDurationReached;
var _key_resp_2_allKeys;
var instruction4MaxDuration;
var instruction4Components;
function instruction4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instruction4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instruction4Clock.reset();
    routineTimer.reset();
    instruction4MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('instruction4.started', globalClock.getTime());
    instruction4MaxDuration = null
    // keep track of which components have finished
    instruction4Components = [];
    instruction4Components.push(image_4);
    instruction4Components.push(key_resp_2);
    
    instruction4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function instruction4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instruction4' ---
    // get current time
    t = instruction4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }
    
    
    // if image_4 is active this frame...
    if (image_4.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    instruction4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instruction4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instruction4' ---
    instruction4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instruction4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "instruction4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var maintestMaxDurationReached;
var _key_resp_allKeys;
var maintestMaxDuration;
var maintestComponents;
function maintestRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'maintest' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    maintestClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    maintestMaxDurationReached = false;
    // update component parameters for each repeat
    polygon_2.setFillColor(new util.Color([Intensity, Intensity, Intensity]));
    polygon_2.setLineColor(new util.Color([Intensity, Intensity, Intensity]));
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('maintest.started', globalClock.getTime());
    maintestMaxDuration = null
    // keep track of which components have finished
    maintestComponents = [];
    maintestComponents.push(polygon_2);
    maintestComponents.push(key_resp);
    
    maintestComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function maintestRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'maintest' ---
    // get current time
    t = maintestClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_2* updates
    if (t >= 0.0 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }
    
    
    // if polygon_2 is active this frame...
    if (polygon_2.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (polygon_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      polygon_2.tStop = t;  // not accounting for scr refresh
      polygon_2.frameNStop = frameN;  // exact frame index
      // update status
      polygon_2.status = PsychoJS.Status.FINISHED;
      polygon_2.setAutoDraw(false);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_resp.tStop = t;  // not accounting for scr refresh
      key_resp.frameNStop = frameN;  // exact frame index
      // update status
      key_resp.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_resp.tStop = t;  // not accounting for scr refresh
        key_resp.frameNStop = frameN;  // exact frame index
        // update status
        key_resp.status = PsychoJS.Status.FINISHED;
        key_resp.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_resp is active this frame...
      if (key_resp.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
        if (_key_resp_allKeys.length > 0) {
          key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
          key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
          key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      maintestComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function maintestRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'maintest' ---
      maintestComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('maintest.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp.corr, level);
      }
      psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
      if (typeof key_resp.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
          psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
          }
      
      key_resp.stop();
      // Run 'End Routine' code from stopLoop
      if ((key_resp.keys === "space")) {
          RT = key_resp.rt;
          psychoJS.experiment.addData("Threshold", Intensity);
          psychoJS.experiment.addData("RT", RT);
          ascendingLoop.finished = true;
      }
      
      if (routineForceEnded) {
          routineTimer.reset();} else if (maintestMaxDurationReached) {
          maintestClock.add(maintestMaxDuration);
      } else {
          maintestClock.add(1.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var EndMaxDurationReached;
var RT_text;
var _EndKey_allKeys;
var EndMaxDuration;
var EndComponents;
function EndRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'End' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      EndClock.reset();
      routineTimer.reset();
      EndMaxDurationReached = false;
      // update component parameters for each repeat
      // Run 'Begin Routine' code from showRT
      RT_text = `نتیجه:
      
      از سطح ${Trial} به بعد، دایره قابل مشاهده بود.
      
      برای خروج، کلید فاصله را فشار دهید.`
      ;
      
      EndText.setText(RT_text);
      EndKey.keys = undefined;
      EndKey.rt = undefined;
      _EndKey_allKeys = [];
      psychoJS.experiment.addData('End.started', globalClock.getTime());
      EndMaxDuration = null
      // keep track of which components have finished
      EndComponents = [];
      EndComponents.push(EndText);
      EndComponents.push(EndKey);
      
      EndComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function EndRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'End' ---
      // get current time
      t = EndClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *EndText* updates
      if (t >= 0.0 && EndText.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        EndText.tStart = t;  // (not accounting for frame time here)
        EndText.frameNStart = frameN;  // exact frame index
        
        EndText.setAutoDraw(true);
      }
      
      
      // if EndText is active this frame...
      if (EndText.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *EndKey* updates
      if (t >= 0.0 && EndKey.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        EndKey.tStart = t;  // (not accounting for frame time here)
        EndKey.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { EndKey.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { EndKey.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { EndKey.clearEvents(); });
      }
      
      // if EndKey is active this frame...
      if (EndKey.status === PsychoJS.Status.STARTED) {
        let theseKeys = EndKey.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _EndKey_allKeys = _EndKey_allKeys.concat(theseKeys);
        if (_EndKey_allKeys.length > 0) {
          EndKey.keys = _EndKey_allKeys[_EndKey_allKeys.length - 1].name;  // just the last key pressed
          EndKey.rt = _EndKey_allKeys[_EndKey_allKeys.length - 1].rt;
          EndKey.duration = _EndKey_allKeys[_EndKey_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      EndComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function EndRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'End' ---
      EndComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('End.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(EndKey.corr, level);
      }
      psychoJS.experiment.addData('EndKey.keys', EndKey.keys);
      if (typeof EndKey.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('EndKey.rt', EndKey.rt);
          psychoJS.experiment.addData('EndKey.duration', EndKey.duration);
          routineTimer.reset();
          }
      
      EndKey.stop();
      // the Routine "End" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var goodbyMaxDurationReached;
var _key_resp_3_allKeys;
var goodbyMaxDuration;
var goodbyComponents;
function goodbyRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'goodby' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      goodbyClock.reset();
      routineTimer.reset();
      goodbyMaxDurationReached = false;
      // update component parameters for each repeat
      key_resp_3.keys = undefined;
      key_resp_3.rt = undefined;
      _key_resp_3_allKeys = [];
      psychoJS.experiment.addData('goodby.started', globalClock.getTime());
      goodbyMaxDuration = null
      // keep track of which components have finished
      goodbyComponents = [];
      goodbyComponents.push(image_5);
      goodbyComponents.push(key_resp_3);
      
      goodbyComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
         });
      return Scheduler.Event.NEXT;
    }
  }
  
  
function goodbyRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'goodby' ---
      // get current time
      t = goodbyClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *image_5* updates
      if (t >= 0.0 && image_5.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        image_5.tStart = t;  // (not accounting for frame time here)
        image_5.frameNStart = frameN;  // exact frame index
        
        image_5.setAutoDraw(true);
      }
      
      
      // if image_5 is active this frame...
      if (image_5.status === PsychoJS.Status.STARTED) {
      }
      
      
      // *key_resp_3* updates
      if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        key_resp_3.tStart = t;  // (not accounting for frame time here)
        key_resp_3.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
      }
      
      // if key_resp_3 is active this frame...
      if (key_resp_3.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_resp_3.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
        if (_key_resp_3_allKeys.length > 0) {
          key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
          key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
          key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      goodbyComponents.forEach( function(thisComponent) {
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
        }
      });
      
      // refresh the screen if continuing
      if (continueRoutine) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function goodbyRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'goodby' ---
      goodbyComponents.forEach( function(thisComponent) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      });
      psychoJS.experiment.addData('goodby.stopped', globalClock.getTime());
      // update the trial handler
      if (currentLoop instanceof MultiStairHandler) {
        currentLoop.addResponse(key_resp_3.corr, level);
      }
      psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
      if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
          psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
          psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
          routineTimer.reset();
          }
      
      key_resp_3.stop();
      // the Routine "goodby" was not non-slip safe, so reset the non-slip timer
      routineTimer.reset();
      
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
function importConditions(currentLoop) {
    return async function () {
      psychoJS.importAttributes(currentLoop.getCurrentTrial());
      return Scheduler.Event.NEXT;
      };
  }
  
  
async function quitPsychoJS(message, isCompleted) {
    // Check for and save orphaned data
    if (psychoJS.experiment.isEntryEmpty()) {
      psychoJS.experiment.nextEntry();
    }
    psychoJS.window.close();
    psychoJS.quit({message: message, isCompleted: isCompleted});
    
    return Scheduler.Event.QUIT;
  }
