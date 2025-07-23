import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: true,
        height: 'auto',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'multiple', 'range'],
      description: 'Selection mode for the calendar.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'single' },
      },
    },
    captionLayout: {
      control: 'select',
      options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
      description: 'Layout style for the calendar caption/header.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'label' },
      },
    },
    buttonVariant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Button variant for navigation controls.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'ghost' },
      },
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Whether to show days from adjacent months.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    weekStartsOn: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6],
      description: 'Day of the week to start on (0 = Sunday, 1 = Monday, etc.).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    numberOfMonths: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Number of months to display.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    disabled: {
      control: 'object',
      description: 'Array of dates or date ranges to disable.',
      table: {
        type: { summary: 'Date[] | DateRange[] | Matcher' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes for custom styling.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  args: {
    mode: 'single',
    captionLayout: 'label',
    buttonVariant: 'ghost',
    showOutsideDays: true,
    weekStartsOn: 0,
    numberOfMonths: 1,
  },
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

// Primary story with interactive date selection
export const Primary: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>(new Date())
    
    return (
      <div className="space-y-4">
        <Calendar
          {...args}
          mode="single"
          selected={selected}
          onSelect={setSelected}
        />
        {selected && (
          <p className="text-sm text-muted-foreground text-center">
            Selected: {selected.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        )}
      </div>
    )
  },
  args: {
    mode: 'single',
    captionLayout: 'label',
    buttonVariant: 'ghost',
    showOutsideDays: true,
    weekStartsOn: 0,
    numberOfMonths: 1,
  },
}

// Selection modes comparison
export const SelectionModes: Story = {
  render: (args) => {
    const [singleDate, setSingleDate] = useState<Date | undefined>(new Date())
    const [multipleDates, setMultipleDates] = useState<Date[]>([new Date()])
    const [rangeDate, setRangeDate] = useState<{from: Date | undefined, to?: Date | undefined}>({
      from: new Date(),
      to: undefined
    })

    return (
      <div className="space-y-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Single Date Selection</h3>
          <p className="text-sm text-muted-foreground">Perfect for appointment booking or consultation scheduling</p>
          <Calendar
            {...args}
            mode="single"
            selected={singleDate}
            onSelect={setSingleDate}
          />
          {singleDate && (
            <p className="text-sm text-muted-foreground">
              Consultation scheduled: {singleDate.toLocaleDateString()}
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Multiple Date Selection</h3>
          <p className="text-sm text-muted-foreground">Ideal for marking available installation dates or project milestones</p>
          <Calendar
            {...args}
            mode="multiple"
            selected={multipleDates}
            onSelect={setMultipleDates}
          />
          {multipleDates && multipleDates.length > 0 && (
            <p className="text-sm text-muted-foreground">
              Installation dates: {multipleDates.length} day{multipleDates.length !== 1 ? 's' : ''} selected
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Date Range Selection</h3>
          <p className="text-sm text-muted-foreground">Great for project timelines or vacation rental booking</p>
          <Calendar
            {...args}
            mode="range"
            selected={rangeDate}
            onSelect={setRangeDate}
          />
          {rangeDate?.from && (
            <p className="text-sm text-muted-foreground">
              Project duration: {rangeDate.from.toLocaleDateString()}
              {rangeDate.to && ` to ${rangeDate.to.toLocaleDateString()}`}
            </p>
          )}
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['mode'],
    },
  },
}

// Caption layout variations
export const CaptionLayouts: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>(new Date())

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Label Layout</h3>
          <p className="text-sm text-muted-foreground">Clean and minimal design</p>
          <Calendar
            {...args}
            captionLayout="label"
            selected={selected}
            onSelect={setSelected}
            mode="single"
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Dropdown Layout</h3>
          <p className="text-sm text-muted-foreground">Quick navigation with dropdowns</p>
          <Calendar
            {...args}
            captionLayout="dropdown"
            selected={selected}
            onSelect={setSelected}
            mode="single"
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Dropdown Months</h3>
          <p className="text-sm text-muted-foreground">Month dropdown only</p>
          <Calendar
            {...args}
            captionLayout="dropdown-months"
            selected={selected}
            onSelect={setSelected}
            mode="single"
          />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Dropdown Years</h3>
          <p className="text-sm text-muted-foreground">Year dropdown only</p>
          <Calendar
            {...args}
            captionLayout="dropdown-years"
            selected={selected}
            onSelect={setSelected}
            mode="single"
          />
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['captionLayout', 'mode'],
    },
  },
}

// Multi-month calendar
export const MultipleMonths: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<{from: Date | undefined, to?: Date | undefined}>({
      from: new Date(),
      to: undefined
    })

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Project Timeline Planning</h3>
          <p className="text-sm text-muted-foreground">Select start and end dates for your interior design project</p>
        </div>
        <Calendar
          {...args}
          mode="range"
          numberOfMonths={2}
          selected={selected}
          onSelect={setSelected}
        />
        {selected?.from && (
          <div className="text-center text-sm text-muted-foreground">
            <p>
              Project Timeline: {selected.from.toLocaleDateString()}
              {selected.to && ` → ${selected.to.toLocaleDateString()}`}
            </p>
            {selected.to && (
              <p className="mt-1">
                Duration: {Math.ceil((selected.to.getTime() - selected.from.getTime()) / (1000 * 60 * 60 * 24))} days
              </p>
            )}
          </div>
        )}
      </div>
    )
  },
  args: {
    numberOfMonths: 2,
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['numberOfMonths', 'mode'],
    },
  },
}

// Disabled dates example
export const DisabledDates: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>()
    
    // Disable weekends and past dates
    const today = new Date()
    const disabledDays = [
      { before: today }, // Past dates
      { dayOfWeek: [0, 6] }, // Weekends
      // Specific unavailable dates (e.g., holidays)
      new Date(2024, 11, 25), // Christmas
      new Date(2024, 0, 1),   // New Year's Day
    ]

    return (
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Consultation Booking</h3>
          <p className="text-sm text-muted-foreground">
            Available weekdays only - weekends and holidays are unavailable
          </p>
        </div>
        <Calendar
          {...args}
          mode="single"
          selected={selected}
          onSelect={setSelected}
          disabled={disabledDays}
        />
        {selected && (
          <p className="text-sm text-muted-foreground text-center">
            Consultation booked: {selected.toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        )}
        <div className="text-xs text-muted-foreground text-center">
          <p>• Past dates are disabled</p>
          <p>• Weekends are unavailable</p>
          <p>• Holidays are blocked</p>
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['disabled', 'mode'],
    },
  },
}

// Interior design use cases
export const DesignUseCases: Story = {
  render: (args) => {
    const [consultationDate, setConsultationDate] = useState<Date | undefined>()
    const [projectTimeline, setProjectTimeline] = useState<{from: Date | undefined, to?: Date | undefined}>()
    const [installationDates, setInstallationDates] = useState<Date[]>([])

    return (
      <div className="space-y-12">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Initial Design Consultation</h3>
            <p className="text-muted-foreground">Schedule your complimentary design consultation</p>
          </div>
          <div className="max-w-sm mx-auto">
            <Calendar
              {...args}
              mode="single"
              selected={consultationDate}
              onSelect={setConsultationDate}
              disabled={{ before: new Date(), dayOfWeek: [0, 6] }}
            />
            {consultationDate && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg text-center">
                <p className="font-medium">Consultation Scheduled</p>
                <p className="text-sm text-muted-foreground">
                  {consultationDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Duration: 2 hours • Location: Client's home
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Project Timeline</h3>
            <p className="text-muted-foreground">Define your kitchen renovation timeline</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Calendar
              {...args}
              mode="range"
              numberOfMonths={2}
              selected={projectTimeline}
              onSelect={setProjectTimeline}
              disabled={{ before: new Date() }}
            />
            {projectTimeline?.from && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg text-center">
                <p className="font-medium">Kitchen Renovation Timeline</p>
                <p className="text-sm text-muted-foreground">
                  Start: {projectTimeline.from.toLocaleDateString()}
                  {projectTimeline.to && ` • End: ${projectTimeline.to.toLocaleDateString()}`}
                </p>
                {projectTimeline.to && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Estimated Duration: {Math.ceil((projectTimeline.to.getTime() - projectTimeline.from.getTime()) / (1000 * 60 * 60 * 24))} days
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Installation Schedule</h3>
            <p className="text-muted-foreground">Mark available dates for custom furniture delivery</p>
          </div>
          <div className="max-w-sm mx-auto">
            <Calendar
              {...args}
              mode="multiple"
              selected={installationDates}
              onSelect={setInstallationDates}
              disabled={{ before: new Date(), dayOfWeek: [0] }} // No Sundays
            />
            {installationDates && installationDates.length > 0 && (
              <div className="mt-4 p-4 bg-muted/50 rounded-lg text-center">
                <p className="font-medium">Installation Dates</p>
                <p className="text-sm text-muted-foreground">
                  {installationDates.length} day{installationDates.length !== 1 ? 's' : ''} selected
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Custom cabinetry • Countertop installation • Final staging
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  },
  parameters: {
    layout: 'padded',
    controls: {
      exclude: ['mode', 'numberOfMonths', 'disabled'],
    },
  },
}