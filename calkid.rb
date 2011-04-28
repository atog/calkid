class Exercise

  attr_accessor :x, :y, :total

  def self.generate(number=10, max=20)
    exercises = []
    number.times do
      exercises << Exercise.new((rand * (max+1)).floor, (rand * (max+1)).floor)
    end
    exercises
  end

  def initialize(x, y)
    self.x, self.y, self.total = [x, y, ([x, y].max - [x, y].min)].sort
  end

  def add
    "#{x} + #{y}"
  end

  def subtract
    x > y ? "#{x} - #{y}" : "#{y} - #{x}"
  end

  def to_s
    "x: #{x} y: #{y} total: #{total}"
  end

end

Exercise.generate(1,100).each_with_index do |ex, i|
  value = ex.send([:add, :subtract][i%2])
  puts "#{value} = "
  a = gets
  puts eval(value).to_s == a.chomp
end
